const path = require('path');
const fs = require("fs");
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
require('dotenv').config({path: path.join(__dirname, '..', '..', '.env')});

let currentDate;
let date;
let time;
let currentTimeStamp;
let fileList;
let emailAuthenticationDetail;
let emailOption;

currentDate = new Date();
date = currentDate.toISOString().split('T')[0].replace(/-/g, '_').trim();
time = currentDate.toTimeString().split(' ')[0].replace(/:/g, '_').trim();
currentTimeStamp = date + '_' + time;
fileList = getMostRecentFile(path.join(__dirname, '..', '..', 'html-report'));

emailAuthenticationDetail =
{
    EMAIL_FROM: process.env.EMAIL_FROM,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    REDIRECTURI: process.env.REDIRECTURI
};
emailOption =
{
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_SUBJECT: process.env.EMAIL_SUBJECT + ' (' + currentTimeStamp + ')',
    EMAIL_BODY: process.env.EMAIL_BODY,
    EMAIL_ATTACHMENT: fileList
};
sendMail(emailAuthenticationDetail, emailOption);

function getMostRecentFile (directoryPath)
{
    const files = orderReccentFiles(directoryPath);
    return files;
};

function orderReccentFiles (directoryPath)
{
    return fs.readdirSync(directoryPath)
        .filter((file) => fs.lstatSync(path.join(directoryPath, file)).isFile())
        .filter(file => file.split('.')[file.split('.').length-1 ] === 'html')
        .map((file) => ({ filename:file, mtime: fs.lstatSync(path.join(directoryPath, file)).mtime, path: directoryPath +'\\'+file}))
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
};

async function sendMail(emailAuthenticationDetail, emailOption)
{
    let oAuth2Client = new google.auth.OAuth2(emailAuthenticationDetail.CLIENT_ID, emailAuthenticationDetail.CLIENT_SECRET, emailAuthenticationDetail.REDIRECTURI);
    oAuth2Client.setCredentials({ refresh_token: emailAuthenticationDetail.REFRESH_TOKEN });
    let emailAccessToken = await oAuth2Client.getAccessToken();

    let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:
        {
            type: 'OAuth2',
            user: emailAuthenticationDetail.EMAIL_FROM,
            clientId: emailAuthenticationDetail.CLIENT_ID,
            clientSecret: emailAuthenticationDetail.CLIENT_SECRET,
            refreshToken: emailAuthenticationDetail.REFRESH_TOKEN,
            accessToken: emailAccessToken
        }
    });
        
    let mailOptions =
    {
        from:
        {
            name: 'QA Automation Team',
            address: emailAuthenticationDetail.EMAIL_FROM
        },
        to: emailOption.EMAIL_TO,
        subject: emailOption.EMAIL_SUBJECT,
        html: emailOption.EMAIL_BODY,
        attachments:emailOption.EMAIL_ATTACHMENT
    };

    transporter.sendMail(mailOptions,
        function(error, info)
        {
            if (error)
            {
                console.log(error);
            }
            else
            {
                console.log('Email sent: ' + info.response);
            }
        });
}