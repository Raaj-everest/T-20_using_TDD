import { batman } from "../typesScript/app";

test("gives the probability of platers as mentioned", () => {
    var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
   const lengh=(kirat.returnsArray(kirat.prob)).length;
    expect(lengh).toBe(100);
  });
  test("failing at a specific index in the array of probability", () => {
    var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
   const score=(kirat.returnsArray(kirat.prob)[4]);
    expect(score).toBe(0);
   });
   test("failing at a specific index in the array of probability", () => {
    var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
    const score=(kirat.returnsArray(kirat.prob)[5]);
     expect(score).toBe(1);
   });
   test("the score of the batsmen",()=>{
    const runs: number = Math.floor(Math.random() * 100);
    var kirat = new batman("kirat",[5,30,25,10,15,1,9,5]);
    const score= (kirat.returnsArray(kirat.prob)[runs])
    if(score==7){
    expect(score).toBe("out")
    }
   });





