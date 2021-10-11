
export class batman {
  name:string ;
  prob:number[];
  constructor(name:string,prob:number[]){
    this.name = name;
    this.prob = prob;
  }
  
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
  const score= (kirat.returnsArray(kirat.prob)[runs])
 console.log(score);
 if(score==7){
   return "out";
 }
 if(score<7){
  const add = (function () {
    let runsScored=0;
    return function () {runsScored += score; return runsScored}
  })();
  let scored =add();
  return scored;
 }

}
}
   
var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
console.log(kirat.returnsArray(kirat.prob));
