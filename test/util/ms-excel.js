const XLSX = require('xlsx');



module.exports =
{

  print_json_array : function (arr)
  {
      for (let i in arr)
      {
        console.log(arr[i]);
      }
  },
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
  append_sheet_to_workbook : function (wb, ws, sheetName)
  {  
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
  read_workbook_from_xlsx : function (xlsxFile)
  {
    if(typeof require !== 'undefined')
    {
      let workbook = XLSX.utils.book_new();
      workbook = XLSX.readFile(xlsxFile)
      return workbook;
    }
  },
  
 
  
  /***************************************************************************************/
  /* method to append JSON data in sheet 
  ******************************************************************************************
  * @param {worksheet} worksheet where data needs to append
  * @param {JSONData} JSON data that needs to append 
  * @return {workbook object} 
  /****************************************************************************************/
  append_JSON_to_worksheet : function (worksheet, JSONData)
  {
    XLSX.utils.sheet_add_json(worksheet, JSONData)
  }
}