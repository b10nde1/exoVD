//import test instruction/data from config folder
const fs=require('fs');
const testData=JSON.parse(fs.readFileSync('./config/ViaDialogGoogleResult.json', 'utf8'));
//get list of test case in testData
const testCaseList=Object.getOwnPropertyNames(testData);
//use Protractor Page Objects
const viaDialogGoogleResult=require('./obj/ViaDialogGoogleResult');
describe('Via Dialog Exo :: ', function() {
    //generic test, protractor use json.action for test and json.data for value
    testCaseList.forEach(testCase => {
        it(testData[testCase].test,()=>{
            viaDialogGoogleResult[testData[testCase].action](testData[testCase]);
        });
    });
});