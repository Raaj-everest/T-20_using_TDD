import { probabilityOfPlayers } from "../typesScript/app";

test("gives the probability of platers as mentioned", () => {
   const kirat=probabilityOfPlayers(5,30,25,10,15,1,9,5);
   const lengh=kirat.length;
    expect(lengh).toBe(100);
  });
  




