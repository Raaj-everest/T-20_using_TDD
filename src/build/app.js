"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.probabilityOfPlayers = void 0;
function probabilityOfPlayers(dot, one, two, three, four, five, six, out) {
    var arrayOfProbabilities = [];
    for (var ball = 0; ball < dot; ball++)
        arrayOfProbabilities.push(0);
    for (var ball = 0; ball < one; ball++)
        arrayOfProbabilities.push(1);
    for (var ball = 0; ball < two; ball++)
        arrayOfProbabilities.push(2);
    for (var ball = 0; ball < three; ball++)
        arrayOfProbabilities.push(3);
    for (var ball = 0; ball < four; ball++)
        arrayOfProbabilities.push(4);
    for (var ball = 0; ball < five; ball++)
        arrayOfProbabilities.push(5);
    for (var ball = 0; ball < six; ball++)
        arrayOfProbabilities.push(6);
    for (var ball = 0; ball < out; ball++)
        arrayOfProbabilities.push(7);
    return arrayOfProbabilities;
}
exports.probabilityOfPlayers = probabilityOfPlayers;
/* the above function takes the probabilities of the player in an order
and return an array of length 100, which contains the score specified
according to the given probability

for example: if we give the probabilities of a player as
const kirat=probabilityOfPlayers(5,30,25,10,15,1,9,5);
then it return an array as
[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3,
       3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7]   */
