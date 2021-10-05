import { probabilityOfPlayers } from "../typesScript/app";

test("gives the probability of platers as mentioned", () => {
   const kirat=probabilityOfPlayers(5,30,25,10,15,1,9,5);
   const lengh=kirat.length;
    expect(lengh).toBe(100);
  });
  test("failing at a specific index in the array of probability", () => {
    const kirat=probabilityOfPlayers(5,30,25,10,15,1,9,5);
    const score=kirat[4]
     expect(score).toBe(0);
   });
   test("failing at a specific index in the array of probability", () => {
    const kirat=probabilityOfPlayers(5,30,25,10,15,1,9,5);
    const score=kirat[5]
     expect(score).toBe(1);
   });





