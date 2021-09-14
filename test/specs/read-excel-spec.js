var assert = require('assert');
const  util  = require('../util/excel-utilities');
const  XLSX = require('xlsx');

describe('TEST READ DATA FROM EXCEL SHEET', () => {

    it('should be able to read data from worksheet', () => {

        let my_workbook = XLSX.utils.book_new()
        //Read-in workbook and store in a variable
        my_workbook = util.read_workbook_from_xlsx(__dirname+'/data/in.xlsx')
        //Get the Info worksheet for workbook
        let info_worksheet = my_workbook.Sheets["info"]
        let data = util.convert_worksheet_to_json(info_worksheet)
        assert.equal(data[0].emp_id, "101");
        assert.equal(data[1].emp_id, "102");
        assert.equal(data[2].emp_id, "103");

        assert.equal(data[0].emp_name, "Amiya");
        assert.equal(data[1].emp_name, "Paul");
        assert.equal(data[2].emp_name, "Vinita");

        assert.equal(data[0].emp_dept, "IT");
        assert.equal(data[1].emp_dept, "IT");
        assert.equal(data[2].emp_dept, "Testing");
    })


    it('should be able to read multilpe sheets from workbook', () => {
        let my_workbook = XLSX.utils.book_new()
        //Read-in workbook and store in a variable
        my_workbook = util.read_workbook_from_xlsx(__dirname+'/data/in.xlsx')
        //Get the Info worksheet for workbook
        let info_worksheet = my_workbook.Sheets["info"]
        let addrees_worksheet = my_workbook.Sheets["address"]
        let info_data = util.convert_worksheet_to_json(info_worksheet)
        let address_data = util.convert_worksheet_to_json(addrees_worksheet)

        assert.equal(info_data[0].emp_id, "101");
        assert.equal(info_data[1].emp_id, "102");
        assert.equal(info_data[2].emp_id, "103");

        assert.equal(address_data[0].address_line1, "123 West Ave");
        assert.equal(address_data[1].address_line2, "first left");
        assert.equal(address_data[0].state, "CA");
        assert.equal(address_data[1].country, "USA");
        assert.equal(address_data[0].zip, 95089);
        
        
    })

    it('should be able to read sheets from multilpe workbooks', () => {
        let workbook1 = XLSX.utils.book_new()
        let workbook2 = XLSX.utils.book_new()
        workbook1 = util.read_workbook_from_xlsx(__dirname+'/data/in.xlsx')
        workbook2 = util.read_workbook_from_xlsx(__dirname+'/data/in_2.xlsx')
        let info_ws = workbook1.Sheets["info"]
        let address_ws = workbook2.Sheets["info"]
        let data1 = util.convert_worksheet_to_json(info_ws)
        let data2 = util.convert_worksheet_to_json(address_ws)
        assert.equal(data1[0].emp_id, data2[1].emp_id)
    })


    it('should display error message when reading from blank sheet', () => {
        assert.equal(true, true);
        
        
    })

    it('should display error message when reading from blank workbook', () => {
        assert.equal(true, true);
        
        
    })

    it('should display error message when file not found', () => {
        assert.equal(true, true);
        
        
    })
   
    })