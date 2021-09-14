
// var xls_json  = require(	'node-excel-to-json');
const XLSX = require('xlsx');
module.exports = {

print_json_array : function (arr) {
    for (let i in arr) {
      console.log(arr[i]);
    }
},

  /***************************************************************************************/
  /*
   * method excel_getTableRow(fileName, sheetName, columnName, where, callback)
   * @param {fileName} - relative or absolute path of Excel file
   * @param {sheetName} - sheet anme of the Excel file from which data needs to be picked
   * @param {columnName} - name of the column in excel sheet
   * @param {where} - the column value against which the search to be done
   * @param {callback} callback method that contains command results (one excel row from the specified sheet name)
   * and gets called when the command finishes
   * Turn any xls or xlsx file or OpenDocument Spreadsheet (ODS) into a clean JSON file or Javascript Object.
   **/
  /****************************************************************************************/
  // excel_getTableRow : function (fileName, sheetName, columnName, where, callback){
  //   	xls_json(fileName, {
  //       'convert_all_sheet': false,
  //       'return_type': 'Object',
  //       'sheetName': sheetName
  //     }, function(err, result) {
  //     		  if(err) {
  //       		    console.error(err);
  //     		  } else if (result){
  //     			     for(var row = 0; row < result.length; ++row){
  //      				         if (result[row].hasOwnProperty(columnName) && (result[row][columnName] == where)){
  //       				             //console.log(result[row]);
  //       				              callback(result[row]);
  //       			          }
  //   			        }
  //       	    }
  //   	    });
  // },

  // /***************************************************************************************/
  // /*
  //  * method excel_getTableRows(fileName, sheetName, callback)
  //  * @param {fileName} - relative or absolute path of Excel file
  //  * @param {sheetName} - sheet anme of the Excel file from which data needs to be picked
  //  * @param {callback} callback method that contains command results (all excel rows from the specified sheet name)
  //  * and gets called when the command finishes
  //  * Turn any xls or xlsx file or OpenDocument Spreadsheet (ODS) into a clean JSON file or Javascript Object.
  //  **/
  // /****************************************************************************************/
  // excel_getTableRows : function (fileName, sheetName, callback){
  //     xls_json(fileName, {
  //       'convert_all_sheet': false,
  //       'return_type': 'Object',
  //       'sheetName': sheetName
  //     }, function(err, result) {
  //   		    if(err) {
  //     		      console.error(err);
  //   		    } else if (result){
  //   			      //console.log(result);
  //   			      return callback(result);
  //     		    }
  // 	    });
  // },

  // /***************************************************************************************/
  // /*
  //  * method excel_getTableRows(fileName, sheetName, callback)
  //  * @param {fileName} - relative or absolute path of Excel file
  //  * @param {callback} callback method that contains command results (all sheet's rows from the specified sheet name)
  //  * and gets called when the command finishes
  //  * Turn any xls or xlsx file or OpenDocument Spreadsheet (ODS) into a clean JSON file or Javascript Object.
  //  **/
  // /****************************************************************************************/
  // excel_getAllSheetData : function (fileName, callback){
  //     xls_json(fileName, {
  //       'convert_all_sheet': true,
  //       'return_type': 'Object',
  //     }, function(err, result) {
  //   		    if(err) {
  //     		      console.error(err);
  //   		    } else if (result){
  //   			      //console.log(result);
  //   			      return callback(result);
  //     		    }
  // 	    });
  // },

   /***************************************************************************************/
  /* method to converts an array of JS objects to a excel worksheet.
   * @param {jsonData} - [{header1:"rowVal1", header2:"rowVal1", header3:"rowVal1"}]
   * @param {return}  worksheet object 
   **/
  /****************************************************************************************/
  convert_json_to_worksheet : function (jsonData) { return XLSX.utils.json_to_sheet(jsonData) },

  /***************************************************************************************/
  /* method to converts an array of worksheet objects to JSON.
   * @param {ws} - [{header1:"rowVal1", header2:"rowVal1", header3:"rowVal1"}]
   * @param {return}  JSON object 
   **/
  /****************************************************************************************/
  convert_worksheet_to_json : function (ws) { return XLSX.utils.sheet_to_json(ws) },

  /***************************************************************************************/
  /* method to add the worksheet to the workbook 
  ******************************************************************************************
  * @param {wb} workbook object to add the sheet
  * @param {ws} worksheet to add
  * @param {sheetNmame} the name of the sheet
  /****************************************************************************************/
  append_sheet_to_workbook : function (wb, ws, sheetName) {
    
    XLSX.utils.book_append_sheet(wb, ws, sheetName)
  },

  /***************************************************************************************/
  /* method to write the workbook wb object to .xlsx file 
  ******************************************************************************************
  * @param {wb} workbook object 
  * @param {fileDestination} location to save .xlsx file
  /****************************************************************************************/
  write_workbook_to_file: function (wb, fileDestination) { XLSX.writeFile(wb, fileDestination) },

  /***************************************************************************************/
  /* method to read excel file workbook  
  ******************************************************************************************
  * @param {xlsxFile} the file to read in 
  * @return {workbook object} 
  /****************************************************************************************/
  read_workbook_from_xlsx : function (xlsxFile) {
    if(typeof require !== 'undefined'){
      let workbook = XLSX.utils.book_new();
      workbook = XLSX.readFile(xlsxFile)
      return workbook;
    }
  },
} // end of module
