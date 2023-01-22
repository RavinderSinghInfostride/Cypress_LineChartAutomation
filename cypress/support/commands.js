Cypress.Commands.add('VisitLineChartsPage', () => {
    cy.log(Cypress.config().baseUrl)
    cy.visit('/')
    cy.xpath("//a[@id='CybotCookiebotDialogBodyButtonAccept']").click()
    cy.wait(1000)
})