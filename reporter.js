class GradeReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        const finalScore = results.testResults[0].testResults.reduce((total, result) => {
            total+=result.status === 'passed' ? 1 : 0;
            return total;
        }, 0);
        console.info(`Your final score is ${finalScore} out of 5.`);
    }

}
module.exports = GradeReporter;