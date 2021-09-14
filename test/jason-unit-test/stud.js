// //Sample example on how to use the library functions in your any.js file
//  const  util  = require('../util/common-utilities');
 const  util  = require('../util/excel-utilities');
 const data = [
    {emp_id:"106", emp_name:"Jason", emp_dept:"IT"},
    {emp_id:"102",emp_name: "Paul",emp_dept:"IT"},
    {emp_id:"103",emp_name: "Vinita",emp_dept: "Testing"},
    {emp_id:"105",emp_name: "Vinita",emp_dept: "Testing"}
];

const  XLSX = require('xlsx');
let indata_workbook = XLSX.utils.book_new();

indata_workbook = util.read_workbook_from_xlsx(__dirname+'/in.xlsx');
let worksheet = indata_workbook.Sheets["info"];
console.log(indata_workbook.SheetNames)

// let dataObj = util.convert_worksheet_to_json(worksheet)
// console.log(dataObj[0].emp_id);
// console.log(dataObj[1].emp_id);
// console.log(dataObj[2].emp_id);
// util.print_json_values(dataObj);



// util.excel_getTableRow(__dirname+'/sample.xlsx', 'info', 'emp_id', '101', function(results){
//     console.log("Get TABLE ROW");
//     console.log(results);
//     console.log(results.emp_id);
// });

// util.excel_getTableRows(__dirname+'/sample.xlsx', 'address', function(results){
//     console.log("Get TABLE ROWS");
//     console.log(results);
//     //then do what ever validation you to do withe results
//   });
  
//   util.excel_getAllSheetData(__dirname+'/sample.xlsx', function(results){
//     console.log("Get SHEET DATA");
//     console.log(results);
//     //then do what ever validation you to do withe results
//   });

//   util.writeFile("test.xlxs", __dirname+'/out.xlsx')



//   /* generate workbook */
//   // let wb = XLSX.utils.book_new();
//   wb = util.readExcelFile(__dirname+'/out2.xlsx');
//   console.log(wb.SheetNames)
//   console.log(wb.Sheets['MySheet'])


// let wb = XLSX.utils.book_new();
// wb = util.readExcelFile(__dirname+'/out2.xlsx');

// var first_sheet_name = wb.SheetNames[0];
// var address_of_cell = 'A2';

/* Get worksheet */
// var worksheet = wb.Sheets[first_sheet_name];
// console.log(worksheet)

/* Find desired cell */
// var desired_cell = worksheet[address_of_cell];

/* Get the value */
// var desired_value = (desired_cell ? desired_cell.v : undefined);
// console.log(desired_value)
// var desired_value = (desired_cell ? desired_cell.h : undefined);
// console.log(desired_value)
// var desired_value = (desired_cell ? desired_cell.v : undefined);
// console.log(desired_value)

// console.log(desired_value)

// 	var ws = util.json_to_excel_sheet(data);
//  util.append_sheet_to_workbook (wb, ws, "MySheet");
//  util.workbook_to_excel_file(wb,__dirname+'/out2.xlsx')