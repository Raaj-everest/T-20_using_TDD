export function probabilityOfPlayers(
  dot: number,
  one: number,
  two: number,
  three: number,
  four: number,
  five: number,
  six: number,
  out: number
): number[] {
  let arrayOfProbabilities: number[] = [];

  for (let ball: number = 0; ball < dot; ball++) arrayOfProbabilities.push(0);
  for (let ball: number = 0; ball < one; ball++) arrayOfProbabilities.push(1);
  for (let ball: number = 0; ball < two; ball++) arrayOfProbabilities.push(2);
  for (let ball: number = 0; ball < three; ball++) arrayOfProbabilities.push(3);
  for (let ball: number = 0; ball < four; ball++) arrayOfProbabilities.push(4);
  for (let ball: number = 0; ball < five; ball++) arrayOfProbabilities.push(5);
  for (let ball: number = 0; ball < six; ball++) arrayOfProbabilities.push(6);
  for (let ball: number = 0; ball < out; ball++) arrayOfProbabilities.push(7);
  return arrayOfProbabilities;
}

/* the above function takes the probabilities of the player in an order
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
