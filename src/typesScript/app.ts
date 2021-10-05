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