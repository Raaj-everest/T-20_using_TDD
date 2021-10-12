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
}

var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
var dhoni= new batman("dhoni",[10, 40, 20, 5, 10, 1, 4, 10]);
var rumra= new batman("rumra",[20, 30, 25, 5, 5, 1, 4, 20]);
var sashi= new batman ("sashi" ,[30, 25, 5, 0, 5, 1, 4, 30]);

export let batsmanArray=[kirat,dhoni,rumra,sashi];
export function StrikeRotate(batsmanArray: any[]){
  let x= 0, y= 1;
batsmanArray[x] = batsmanArray.splice(y, 1, batsmanArray[x])[0];
return batsmanArray;
}
StrikeRotate(batsmanArray);