import AbstractCondition from '@js/Search/Query/Condition/AbstractCondition';

export default class OrCondition extends AbstractCondition {

    /**
     * @inheritDoc
     */
    evaluate(item) {
        let result = {matches: 0, checks: 0, passed: false};

        for(let condition of this._conditions) {
            let partialResult = condition.evaluate(item);

            if(partialResult.passed) {
                result.passed = true;
                result.matches += partialResult.matches;
                result.checks += partialResult.checks;
            }
        }

        if(!result.passed) return {passed: false};
        return result;
    }
}