import { DownloadPage } from "../pages/download.cy";

describe('Download Test', () => {
    const downloadPage = new DownloadPage();

    it('Should download and save in local successfully', () => {
        cy.visit('http://localhost:8070/');
        cy.get('body').should('contain','The first group of examples uses ' )

        downloadPage.firstCSV.should('exist').click()


    })
})