const  utl  = require('./common-utilities.js');
module.exports = {

    getTableRow : function(filename, sheetname, pivotColumn, pivotRow){

        utl.excel_getTableRow(filename, sheetname, pivotColumn, pivotRow, function(results){
        console.log(results)
        return results
        });
       
    }
}