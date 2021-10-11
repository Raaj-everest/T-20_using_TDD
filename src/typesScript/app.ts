
export class batman {
  name:string ;
  prob:number[];
  constructor(name:string,prob:number[]){
    this.name = name;
    this.prob = prob;
  }
  public batmanIsOut=false;
  public batmanScoredRuns=0
  public NumberOfBallsPlayed=0
  

  returnsArray(prob:number[]){
  const arrayOfProbability:number[] = [];
  for (let ball: number = 0; ball < prob[0]; ball++) arrayOfProbability.push(0);
  for (let ball: number = 0; ball < prob[1]; ball++) arrayOfProbability.push(1);
  for (let ball: number = 0; ball < prob[2]; ball++) arrayOfProbability.push(2);
  for (let ball: number = 0; ball < prob[3]; ball++) arrayOfProbability.push(3);
  for (let ball: number = 0; ball < prob[4]; ball++) arrayOfProbability.push(4);
  for (let ball: number = 0; ball < prob[5]; ball++) arrayOfProbability.push(5);
  for (let ball: number = 0; ball < prob[6]; ball++) arrayOfProbability.push(6);
  for (let ball: number = 0; ball < prob[7]; ball++) arrayOfProbability.push(7);
  return arrayOfProbability;
}

run() {
  const runs: number = Math.floor(Math.random() * 100);
  const score= (this.returnsArray(this.prob)[runs])
  
  if(score==7){
    this.batmanIsOut=true;
  }
  if(score<7){
    this.batmanScoredRuns += score;
  }
  return score;

}




}


var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
var dhoni = new batman("dhoni",[10,25,20,15,10,1,10]);
   
