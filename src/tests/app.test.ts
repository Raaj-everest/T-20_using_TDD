import { batman, out, StrikeRotate,scoreBoard, gamePlay, batsmanArray,kirat, dhoni,rumra,sashi } from "../typesScript/app";


test("gives the probability of platers as mentioned", () => {
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  const lengh = kirat.returnsArray(kirat.prob).length;
  expect(lengh).toBe(100);
});
test("failing at a specific index in the array of probability", () => {
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  const score = kirat.returnsArray(kirat.prob)[4];
  expect(score).toBe(0);
});
test("failing at a specific index in the array of probability", () => {
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  const score = kirat.returnsArray(kirat.prob)[5];
  expect(score).toBe(1);
});
test("the playing condition of the batsmen", () => {
  const runs: number = Math.floor(Math.random() * 100);
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  const score = kirat.returnsArray(kirat.prob)[runs];
  if (score == 7) {
    expect(kirat.batmanIsOut).toBe(true);
  }
  if (score < 7) {
    expect(kirat.batmanIsOut).toBe(false);
  }
});
test("counting the number of balls played by the player", () => {
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  kirat.run();
  expect(kirat.NumberOfBallsPlayed).toBe(1);
});
test("counting the number of balls played by the player", () => {
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  kirat.run();
  kirat.run();
  kirat.run();
  expect(kirat.NumberOfBallsPlayed).toBe(3);
});
test("count the individual score of the player", () => {
  var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
  const score1 = kirat.run();
  const score2 = kirat.run();
  if (score1 < 7 && score2 < 7) {
  expect(kirat.ScoredRuns).toBe(score1+score2);}
});
test("to rotate the strike of the players",()=>{
    var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
var dhoni = new batman("dhoni", [10, 40, 20, 5, 10, 1, 4, 10]);
var rumra = new batman("rumra", [20, 30, 25, 5, 5, 1, 4, 20]);
var sashi = new batman("sashi", [30, 25, 5, 0, 5, 1, 4, 30]);

let batsmanArray = [kirat, dhoni, rumra, sashi];
   StrikeRotate(batsmanArray);
   expect(batsmanArray).toMatchObject([dhoni, kirat, rumra, sashi])
});
test("removing the player from the array who is out",()=>{
    var kirat = new batman("kirat", [5, 30, 25, 10, 15, 1, 9, 5]);
    var dhoni = new batman("dhoni", [10, 40, 20, 5, 10, 1, 4, 10]);
    var rumra = new batman("rumra", [20, 30, 25, 5, 5, 1, 4, 20]);
    var sashi = new batman("sashi", [30, 25, 5, 0, 5, 1, 4, 30]);
    let batsmanArray = [kirat, dhoni, rumra, sashi];
   out(batsmanArray);
   expect(batsmanArray).toMatchObject([dhoni, rumra, sashi]);
});
test("Which tell wether bangalore won if they reach target", () => {
    let team_score=40;
    scoreBoard(team_score);
    expect(true)
  });
  test("Which tell wether bangalore won if they reach more than target", () => {
    let team_score=41;
    scoreBoard(team_score);
    expect(true)
  });
  test("Which tell wether bangalore lose,if they fail to reach target", () => {
    let team_score=39;
    scoreBoard(team_score);
    expect(false)
  });
  test("Total team score is equal to sum ofindividual scores", () => {
    let score=gamePlay(batsmanArray);
    let checker = (kirat.ScoredRuns+rumra.ScoredRuns+sashi.ScoredRuns+dhoni.ScoredRuns)
    expect(score).toBe(checker);
  });
  test("checking two functions when integrated",()=>{
    let batsmanArray = [kirat, dhoni, rumra, sashi];
    //let kirat is out.
    //the striker will be aleays in the first insex of the array,
    out(batsmanArray);
    StrikeRotate(batsmanArray);
    // now the striker should be rumra
    expect(batsmanArray[0]).toBe(rumra)
  });



