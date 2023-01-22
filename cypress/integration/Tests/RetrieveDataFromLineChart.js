import BasicLineChartPage from "../../Pages/BasicLineChartPage"

const basicLineChartPage = new BasicLineChartPage()

describe('Basic line chart', () => {
    it('Retrive data from intallation line chart points', () => {
        basicLineChartPage.iterateThroughInstallationLineChartPoints()
    })

    it('Retrive data from manufacturing line chart points', () => {
        basicLineChartPage.iterateThroughManufaturingLineChartPoints()
    })

    it('Retrive data from sales line chart points', () => {
        basicLineChartPage.iterateThroughSalesLineChartPoints()
    })

    it('Retrive data from other line chart points', () => {
        basicLineChartPage.iterateThroughOtherLineChartPoints()
    })
})