
//Sample example on how to use the library functions in your any.js file


var td = require('../testdata-wrapper')
console.log(__dirname)
td.getTestDataRow(__dirname+'/data/sample.xlsx', 'info', 'emp_id', '101')

// utl.excel_getTableRow(__dirname+'/data/sample.xlsx', 'info', 'emp_id', '101', function(results){
//   console.log(results);
//   console.log(results.emp_id);
// });

// utl.excel_getTableRows(__dirname+'/data/sample.xlsx', 'address', function(results){
//   console.log(results[1]);
//   //then do what ever validation you to do withe results
// });

// utl.excel_getAllSheetData(__dirname+'/data/sample.xlsx', function(results){
//   console.log(results);
//   //then do what ever validation you to do withe results
// });
