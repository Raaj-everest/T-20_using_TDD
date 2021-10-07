

/* the function takes the probabilities of the player in an order
and return an array of length 100, which contains the score specified 
according to the given probability

for example: if we give the probabilities of a player as 
const kirat=probabilityOfPlayers(5,30,25,10,15,1,9,5);
then it return an array as
[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4,
 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7] 
    according to the definition of probaility in the above array
    there is 5% of probability to get "0" ,if we pick at random  
    there is 30% of probability to get "1", if we pick at random and so on..*/
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

  print(){
    console.log(this.prob);
  }

}
   
var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
kirat.print();
console.log(kirat.returnsArray(kirat.prob));