//import { AllureRuntime, CucumberJSAllureFormatter } from 'allure-cucumberjs'
export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({ resultsDir: "./allure-results" }),
      {
        labels: {
          epic: [/@feature:(.*)/],
          severity: [/@severity:(.*)/]
        },
        links: {
          issue: {
            pattern: [/@issue=(.*)/],
            urlTemplate: "http://localhost:8080/issue/%s"
          },
          tms: {
            pattern: [/@tms=(.*)/],
            urlTemplate: "http://localhost:8080/tms/%s"
          }
        }
      }
    );
  }
}