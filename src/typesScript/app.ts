export class batman {
  name: string;
  prob: number[];
  constructor(name: string, prob: number[]) {
    this.name = name;
    this.prob = prob;
  }
  public batmanIsOut = false;
  public ScoredRuns = 0;
  public NumberOfBallsPlayed = 0;

  returnsArray(prob: number[]) {
    const arrayOfProbability: number[] = [];
    for (let ball: number = 0; ball < prob[0]; ball++)
      arrayOfProbability.push(0);
    for (let ball: number = 0; ball < prob[1]; ball++)
      arrayOfProbability.push(1);
    for (let ball: number = 0; ball < prob[2]; ball++)
      arrayOfProbability.push(2);
    for (let ball: number = 0; ball < prob[3]; ball++)
      arrayOfProbability.push(3);
    for (let ball: number = 0; ball < prob[4]; ball++)
      arrayOfProbability.push(4);
    for (let ball: number = 0; ball < prob[5]; ball++)
      arrayOfProbability.push(5);
    for (let ball: number = 0; ball < prob[6]; ball++)
      arrayOfProbability.push(6);
    for (let ball: number = 0; ball < prob[7]; ball++)
      arrayOfProbability.push(7);
    return arrayOfProbability;
  }

  run() {
    const runs: number = Math.floor(Math.random() * 100);
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
  diaplayIndividulalScore() {
    if (this.batmanIsOut) {
      console.log(
        this.name +
        " - " +
        this.ScoredRuns +
        "(" +
        this.NumberOfBallsPlayed +
        " balls)"
      );
    } else if (this.ScoredRuns > 0) {
      console.log(
        this.name +
        " - " +
        this.ScoredRuns +
        "*(" +
        this.NumberOfBallsPlayed +
        " balls)"
      );
    }
    return this.ScoredRuns;
  }
}
const target = 40;
let wicekts = 3;
const TotalOversToPlay = 4;
let teamscore = 0;
let NumberOfBallsPlayedByTeam = 0;
export var kirat = new batman("kirat Boli", [5, 30, 25, 10, 15, 1, 9, 5]);
export var dhoni = new batman("NS Nodhi", [10, 40, 20, 5, 10, 1, 4, 10]);
export var rumra = new batman("R Rumra", [20, 30, 25, 5, 5, 1, 4, 20]);
export var sashi = new batman("Sashi Henra", [30, 25, 5, 0, 5, 1, 4, 30]);
export let batsmanArray = [kirat, dhoni, rumra, sashi];

export function StrikeRotate(batsmanArray: object[]) {
  let x = 0,
    y = 1;
  batsmanArray[x] = batsmanArray.splice(y, 1, batsmanArray[x])[0];
  return batsmanArray;
}
export function out(batsmanArray: object[]) {
  batsmanArray.shift();
  return batsmanArray;
}
export function scoreBoard(teamscore: number) {
  if (teamscore > target - 1) {
    console.log(
      "Bangalore won by " +
      wicekts +
      " wickets " +
      (24 - NumberOfBallsPlayedByTeam) +
      " balls reamaining"
    );
    kirat.diaplayIndividulalScore();
    dhoni.diaplayIndividulalScore();
    rumra.diaplayIndividulalScore();
    sashi.diaplayIndividulalScore();
    return true;
  } else if (teamscore < target - 1) {
    console.log(
      "chennai won by " +
      (target - teamscore) +
      " runs and " +
      (24 - NumberOfBallsPlayedByTeam) +
      " balls remaining"
    );
    return false;
  } else if ((teamscore = target - 1)) {
    console.log(" the match is a TIE");
    return true;
  }
}
export function gamePlay(batsmanArray: any[]) {
  for (let overs = 0; overs < 4; overs++) {
    console.log(
      TotalOversToPlay -
      overs +
      " overs left." +
      (target - teamscore) +
      " runs to win"
    );
    for (let balls = 1; balls < 7; balls++) {
      if (wicekts == 0 || teamscore >= target) {
        break;
      }
      let singleBallScore = batsmanArray[0].run();
      NumberOfBallsPlayedByTeam += 1;
      if (singleBallScore == 7) {
        wicekts -= 1;
        console.log(
          overs + "." + balls + " ohhh!!!  " + batsmanArray[0].name + " is out "
        );
        out(batsmanArray);
        StrikeRotate(batsmanArray);
        if (wicekts > 0) {
          console.log("Now " + batsmanArray[0].name + " enterd to bat.");
        }
      } else {
        teamscore += singleBallScore;
        if (singleBallScore == 0) {
          console.log(
            overs +
            "." +
            balls +
            " " +
            batsmanArray[0].name +
            " is scored no run"
          );
        } else if (singleBallScore == 1) {
          console.log(
            overs +
            "." +
            balls +
            " " +
            batsmanArray[0].name +
            " is scored " +
            singleBallScore +
            " run"
          );
          StrikeRotate(batsmanArray);
          if(NumberOfBallsPlayedByTeam<24){
          console.log("strike rotated!!");}
        } else if (singleBallScore == 3 || singleBallScore == 5) {
          console.log(
            overs +
            "." +
            balls +
            " " +
            batsmanArray[0].name +
            " is scored " +
            singleBallScore +
            " runs"
          );
          StrikeRotate(batsmanArray);
          if(NumberOfBallsPlayedByTeam<24){
          console.log("strike rotated!!");}
        } else if (
          singleBallScore == 2 ||
          singleBallScore == 4 ||
          singleBallScore == 6
        ) {
          console.log(
            overs +
            "." +
            balls +
            " " +
            batsmanArray[0].name +
            " is scored " +
            singleBallScore +
            " runs"
          );
        }
      }
    }
    if (wicekts == 0 || teamscore >= target) {
      break;
    }
    StrikeRotate(batsmanArray);
    console.log("over completed");
  }

  return teamscore;
}
gamePlay(batsmanArray);
scoreBoard(teamscore);
