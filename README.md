# T-20
 Problem Context<br/>
It's the finals of the T20 Cup! Bengaluru and Chennai, neighbours and fierce rivals, are fighting it out for the title. Bengaluru's star batsman Kirat is at the crease. Can he win it for Bengaluru? Write code to simulate the last 4 overs of the match.<br/>
It's the last 4 overs of the match. Bengaluru needs 40 runs to win and with 4 wickets left. Each player has a different probability for scoring runs. Your coding problem is to simulate the match, ball by ball. The match simulation will require you to use a weighted random number generation based on probability to determine the runs scored per ball<br/>
probabilities of the player hitting the games were given in the below table,<br/>
________________________________________________________________________________<br/>
name            dot     one     two     three   four    five    six     out <br/>
-------------------------------------------------------------------------------
kirat boli       5%     30%     25%     10%     15%     1%      9%      5%<br/>
N.S Nodhi        10%    40%     20%      5%     10%     1%      4%      10%<br/>
R Rumra         20%     30%     15%      5%      5%     1%      4%      20%<br/>
Sashi Henra     30%     25%      5%      0%      5%     1%      4%      30%<br/>
_________________________________________________________________________________<br/>

 Rules of the game:<br/>
● Batsmen change strike end of every over. They also change strike when they score a 1,3 or 5<br/>
● When a player gets out, the new player comes in at the same position.<br/>
● Assume only legal balls are bowled (no wides, no no-balls etc..). Therefore an over is always 6 balls.<br/>

Sample Output<br/>
-----------------<br/>
Bengaluru won by 1 wicket and 2 balls remaining<br/>
Kirat Boli - 12 (6 balls)<br/>
NS Nodhi - 25 (11 balls)<br/>
R Rumrah - 2* (3 balls)<br/>
Shashi Henra - 2* (2 balls)<br/>

 Sample commentary<br/>
 -----------------<br/>
4 overs left. 40 runs to win <br/>
0.1 Kirat Boli scores 1 run <br/>
0.2 NS Nodhi scores 4 runs <br/>
0.3 NS Nodhi scores 1 run <br/>
0.4 Kirat Boli scores 2 runs <br/>
0.5 Kirat Boli scores 3 runs <br/>
0.6 NS Nodhi scores 1 run<br/>
3 overs left. 28 runs to win<br/>
1.1 NS Nodhi scores 2 runs<br/>
...<br/>
....1<br/>
Guidelines<br/>
- Use your favorite language & editor<br/>
- Clean, OO (or functional if you prefer) code is expected. Preferably with tests. - Add a README file detailing the instructions to run tests and the application.<br/>
 