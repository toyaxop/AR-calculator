const adventureRankTable = {
    1: 535,
    2: 500,
    3: 625,
    4: 725,
    5: 850,
    6: 950,
    7: 1075,
    8: 1200,
    9: 1300,
    10: 1420,
    11: 1525,
    12: 1650,
    13: 1775,
    14: 1875,
    15: 2000,
    16: 2375,
    17: 2500,
    18: 2630,
    19: 2760,
    20: 2890,
    21: 3430,
    22: 3720,
    23: 4000,
    24: 4290,
    25: 4580,
    26: 4870,
    27: 5160,
    28: 5440,
    29: 5730,
    30: 6020,
    31: 6300,
    32: 6600,
    33: 6900,
    34: 7175,
    35: 7475,
    36: 7750,
    37: 8050,
    38: 8325,
    39: 8625,
    40: 10550,
    41: 11525,
    42: 12475,
    43: 13450,
    44: 14400,
    45: 15350,
    46: 16325,
    47: 17275,
    48: 18250,
    49: 19200,
    50: 26400,
    51: 28800,
    52: 31200,
    53: 33600,
    54: 36000,
    55: 232350,
    56: 258950,
    57: 285750,
    58: 312825,
    59: 340125
};

function updateStartValue() {
    const startRank = document.getElementById('startRank').value;
    document.getElementById('startRankValue').innerText = startRank;

    // Ensure end rank is not less than start rank
    const endRank = document.getElementById('endRank').value;
    if (parseInt(endRank) < parseInt(startRank)) {
        document.getElementById('endRank').value = startRank;
        document.getElementById('endRankValue').innerText = startRank;
    }
}

function updateEndValue() {
    let endRank = document.getElementById('endRank').value;
    document.getElementById('endRankValue').innerText = endRank;

    // Ensure end rank is not less than start rank
    const startRank = document.getElementById('startRank').value;
    if (parseInt(endRank) < parseInt(startRank)) {
        document.getElementById('startRank').value = endRank;
        document.getElementById('startRankValue').innerText = endRank;
    }
}

function calculateExperience() {
    const startRank = parseInt(document.getElementById('startRank').value);
    const endRank = parseInt(document.getElementById('endRank').value);
    const currentXp = parseInt(document.getElementById('currentXP').value);
    let totalExperience = 0;

    for (let i = startRank; i < endRank; i++) {
        totalExperience += adventureRankTable[i];
    }

    totalExperience -= currentXp;

    document.getElementById('result').innerText = `The XP needed to go from rank ${startRank} with ${currentXp} to rank ${endRank} is ${totalExperience} EXP.`;
}

// Initialize displayed slider values
updateStartValue();
updateEndValue();