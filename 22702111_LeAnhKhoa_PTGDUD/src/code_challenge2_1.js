const calcAvg = (x, y, z) => (x + y + z) / 3;

const scoreDolphins = calcAvg(85, 54, 41);
const scoreKoalas = calcAvg(23, 34, 27);

const checkWinner = function(avgKoalas, avgDolphins) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs .${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs .${avgDolphins})`);
    } else {
        console.log("No team wins");
    }
}
checkWinner(scoreDolphins, scoreKoalas);