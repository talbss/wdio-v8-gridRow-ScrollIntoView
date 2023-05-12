describe('Navigate to https://www.ag-grid.com/example/', () => {

    it('should navigate to https://www.ag-grid.com/example/', async () => {
        await browser.url(`https://www.ag-grid.com/example/`);
        await browser.setWindowSize(1920, 1080);
        await browser.pause(3000); //tempo
    })

    it('Save first row first cell location before any ScrollIntoView  result on first row vs on first row first cell', async () => {
        const xpathFirstRow = $('//div[contains(@class,"ag-body ag-layout-normal")]//div[contains(@class,"ag-center-cols-viewport")]//div[@row-index="1"]');
        const xpathFirstRowFirstCell = $('//div[contains(@class,"ag-body ag-layout-normal")]//div[contains(@class,"ag-center-cols-viewport")]//div[@row-index="1"]/div[@col-id="name"]');
        
        await xpathFirstRow.scrollIntoView();
        let firstRowfirstCellLocationAfterFirstRowScrollIntoView = await xpathFirstRowFirstCell.getLocation()
        console.log(`firstRowfirstCellLocationAfterFirstRowScrollIntoView: '${JSON.stringify(firstRowfirstCellLocationAfterFirstRowScrollIntoView)}'`);

        await xpathFirstRowFirstCell.scrollIntoView();
        let firstRowFirstCellLocationAfterFirstRowFirstCellScrollIntoView = await xpathFirstRowFirstCell.getLocation()
        console.log(`firstRowFirstCellLocationAfterFirstRowFirstCellScrollIntoView: '${JSON.stringify(firstRowFirstCellLocationAfterFirstRowFirstCellScrollIntoView)}'`);
    
        expect(firstRowfirstCellLocationAfterFirstRowScrollIntoView).toMatchObject(firstRowFirstCellLocationAfterFirstRowFirstCellScrollIntoView);
    })
})