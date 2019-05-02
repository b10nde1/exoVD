//Protractor Page Objects for Viadialog exo
const ViaDialogGoogleResult=function(){
    this.get=(argData)=>{
        browser.get(argData.data);
    }
    this.checkTitle=(argData)=>{
        expect(browser.getTitle()).toEqual(argData.data);
    }
    this.type=(argData)=>{
        let elmnt=browser.driver.findElement(by.xpath(argData.path));
        elmnt.sendKeys(argData.data);
    }
    this.click=(argData)=>{
        let elmnt=browser.driver.findElement(by.xpath(argData.path));
        elmnt.click();
    }
    this.specExoViaDialog=(argData)=>{
        let elmnt=browser.driver.findElement(by.xpath(argData.path));
        expect(elmnt.getText()).toEqual(argData.value);
    }
}

module.exports=new ViaDialogGoogleResult();
