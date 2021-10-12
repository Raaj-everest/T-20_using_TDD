"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrikeRotate = exports.batsmanArray = exports.batman = void 0;
class batman {
    constructor(name, prob) {
        this.batmanIsOut = false;
        this.ScoredRuns = 0;
        this.NumberOfBallsPlayed = 0;
        this.name = name;
        this.prob = prob;
    }
    returnsArray(prob) {
        const arrayOfProbability = [];
        for (let ball = 0; ball < prob[0]; ball++)
            arrayOfProbability.push(0);
        for (let ball = 0; ball < prob[1]; ball++)
            arrayOfProbability.push(1);
        for (let ball = 0; ball < prob[2]; ball++)
            arrayOfProbability.push(2);
        for (let ball = 0; ball < prob[3]; ball++)
            arrayOfProbability.push(3);
        for (let ball = 0; ball < prob[4]; ball++)
            arrayOfProbability.push(4);
        for (let ball = 0; ball < prob[5]; ball++)
            arrayOfProbability.push(5);
        for (let ball = 0; ball < prob[6]; ball++)
            arrayOfProbability.push(6);
        for (let ball = 0; ball < prob[7]; ball++)
            arrayOfProbability.push(7);
        return arrayOfProbability;
    }
    run() {
        const runs = Math.floor(Math.random() * 100);
        const score = this.returnsArray(this.prob)[runs];
        this.NumberOfBallsPlayed += 1;
        if (score == 7) {
            this.batmanIsOut = true;
        }
        if (score < 7) {
            this.ScoredRuns += score;
        }
        return score;
    }
}
exports.batman = batman;
var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
var dhoni = new batman("dhoni", [10, 40, 20, 5, 10, 1, 4, 10]);
var rumra = new batman("rumra", [20, 30, 25, 5, 5, 1, 4, 20]);
var sashi = new batman("sashi", [30, 25, 5, 0, 5, 1, 4, 30]);
exports.batsmanArray = [kirat, dhoni, rumra, sashi];
console.log(exports.batsmanArray);
function StrikeRotate() {
    let x = 0, y = 1;
    exports.batsmanArray[x] = exports.batsmanArray.splice(y, 1, exports.batsmanArray[x])[0];
}
exports.StrikeRotate = StrikeRotate;
StrikeRotate();
console.log(exports.batsmanArray);
