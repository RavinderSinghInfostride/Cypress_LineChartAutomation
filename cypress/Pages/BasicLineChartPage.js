class BasicLineChartPage {
    chartPointText = "//*[local-name()='text' and @x='8']"

    intallationLineChartPoints = "//*[local-name()='path' and @class='highcharts-point highcharts-color-0']"
    manufaturingLineChartPoints = "//*[local-name()='path' and @class='highcharts-point highcharts-color-1']"
    salesLineChartPoints = "//*[local-name()='path' and @class='highcharts-point highcharts-color-2']"
    otherLineChartPoints = "//*[local-name()='path' and @class='highcharts-point highcharts-color-4']"

    iterateThroughInstallationLineChartPoints() {
        cy.VisitLineChartsPage()
        cy.xpath(this.intallationLineChartPoints).then($ele => {
            const numberOfInstallationChartPoints = $ele.length
            cy.log(numberOfInstallationChartPoints)
            for (let i = 0; i < numberOfInstallationChartPoints - 1; i++) {
                cy.xpath(this.intallationLineChartPoints).should('be.visible')
                cy.wait(1000)
                cy.xpath(this.intallationLineChartPoints).eq(i).click()
                cy.wait(1000)
                cy.xpath(this.chartPointText).then($textBox => {
                    const text = $textBox.text()
                    cy.log(text)
                    expect($textBox).to.contain(text)
                })
            }
        })
    }

    iterateThroughManufaturingLineChartPoints() {
        // cy.VisitLineChartsPage()
        cy.xpath(this.manufaturingLineChartPoints).then($ele => {
            const numberOfManufacturingChartPoints = $ele.length
            cy.log(numberOfManufacturingChartPoints)
            for (let i = 0; i < numberOfManufacturingChartPoints - 1; i++) {
                cy.xpath(this.manufaturingLineChartPoints).eq(i).should('be.visible')
                cy.wait(1000)
                cy.xpath(this.manufaturingLineChartPoints).eq(i).click({ force: true })
                cy.wait(1000)
                cy.xpath(this.chartPointText).then($textBox => {
                    const text = $textBox.text()
                    cy.log(text)
                    expect($textBox).to.contain(text)
                })
            }
        })
    }

    iterateThroughSalesLineChartPoints() {
        cy.VisitLineChartsPage()
        cy.xpath(this.salesLineChartPoints).then($ele => {
            const numberOfSalesChartPoints = $ele.length
            cy.log(numberOfSalesChartPoints)
            for (let i = 0; i < numberOfSalesChartPoints - 1; i++) {
                cy.xpath(this.salesLineChartPoints).eq(i).should('be.visible')
                cy.wait(1000)
                cy.xpath(this.salesLineChartPoints).eq(i).click({ force: true })
                cy.wait(1000)
                cy.xpath(this.chartPointText).then($textBox => {
                    const text = $textBox.text()
                    cy.log(text)
                    expect($textBox).to.contain(text)
                })
            }
        })
    }

    iterateThroughOtherLineChartPoints() {
        cy.VisitLineChartsPage()
        cy.xpath(this.otherLineChartPoints).then($ele => {
            const numberOfOtherChartPoints = $ele.length
            cy.log(numberOfOtherChartPoints)
            cy.scrollTo(0, 200)
            for (let i = 0; i < numberOfOtherChartPoints - 1; i++) {
                cy.xpath(this.otherLineChartPoints).should('be.visible')
                cy.wait(1000)
                cy.xpath(this.otherLineChartPoints).eq(i).click()
                cy.wait(1000)
                cy.xpath(this.chartPointText).then($textBox => {
                    const text = $textBox.text()
                    cy.log(text)
                    expect($textBox).to.contain(text)
                })
            }
        })
    }
}
export default BasicLineChartPage