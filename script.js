function isValidOver(overs) {
    const parts = overs.toString().split('.');
    if (parts.length === 2) {
        const balls = parseInt(parts[1]);
        if (balls > 5) {
            return false;
        }
    }
    return true;
}

function calculateNRR() {
    const runsScored = parseFloat(document.getElementById('runsScored').value);
    const oversFaced = parseFloat(document.getElementById('oversFaced').value);
    const runsConceded = parseFloat(document.getElementById('runsConceded').value);
    const oversBowled = parseFloat(document.getElementById('oversBowled').value);

    if (isValidOver(oversFaced) && isValidOver(oversBowled)) {
        const totalOversFaced = oversFaced;
        const totalOversBowled = oversBowled;

        if (totalOversFaced > 0 && totalOversBowled > 0) {
            const teamRunRate = runsScored / totalOversFaced;
            const opponentRunRate = runsConceded / totalOversBowled;

            const netRunRate = teamRunRate - opponentRunRate;

            document.getElementById('result').innerText = `Net Run Rate: ${netRunRate.toFixed(2)}`;
        } else {
            document.getElementById('result').innerText = 'Total overs faced and bowled should be greater than zero.';
        }
    } else {
        document.getElementById('result').innerText = 'Invalid overs. The decimal part (balls) must be between 0 and 5.';
    }
}
