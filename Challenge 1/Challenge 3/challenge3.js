const fireBeasts = [2, 2, 0.5, 0.5, 1, 1, 2, 0.5, 1, 1];
const iceBeasts = [1, 1, 2, 2, 0.5, 0.5, 1, 1, 2, 0.5];
const waterBeasts = [2, 0.5, 1, 1, 2, 2, 0.5, 0.5, 1, 1];
const windBeasts = [1, 1, 2, 0.5, 1, 1, 2, 2, 0.5, 0.5];

let wizardType = 'Wind';
let beasts;

switch (wizardType.toLowerCase()) {
    case 'fire':
        beasts = fireBeasts;
        break;
    case 'ice':
        beasts = iceBeasts;
        break;
    case 'water':
        beasts = waterBeasts;
        break;
    case 'wind':
        beasts = windBeasts;
        break;
}

let maze = [
    [
        "C",
        "F",
        "W",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F"
    ],
    [
        "F",
        "D",
        "F",
        "A",
        "F",
        "D",
        "C",
        "F",
        "F"
    ],
    [
        "F",
        "F",
        "A",
        "F",
        "B",
        "F",
        "F",
        "T",
        "F"
    ],
    [
        "T",
        "F",
        "F",
        "P",
        "F",
        "F",
        "W",
        "F",
        "F"
    ],
    [
        "F",
        "F",
        "C",
        "F",
        "S",
        "F",
        "F",
        "P",
        "F"
    ],
    [
        "D",
        "F",
        "T",
        "F",
        "F",
        "T",
        "A",
        "F",
        "A"
    ],
    [
        "F",
        "A",
        "F",
        "D",
        "F",
        "F",
        "C",
        "F",
        "F"
    ],
    [
        "F",
        "F",
        "G",
        "F",
        "P",
        "S",
        "F",
        "B",
        "F"
    ],
    [
        "I",
        "F",
        "F",
        "F",
        "F",
        "F",
        "B",
        "F",
        "T"
    ]
];

function findPath(beasts, paths) {
    bestPath = [];
    const MAX_LENGTH_ROW = paths[0].length;
    const MAX_LENGTH_COLUMN = paths.length;

    for (let i = 0; i < MAX_LENGTH_ROW; ++i) {
        if (i == 0) {
            bestPath.push(findFirstPath(beasts, paths));
        } else {
            currentIndex = bestPath[i - 1];

            highestPoint = 0;
            highestIndex = i;

            //Upper right path
            if (currentIndex - 1 >= 0 && paths[i][currentIndex - 1].toLowerCase() != 'f') {
                if (getPoint(beasts, paths[i][currentIndex - 1]) > highestPoint) {
                    highestPoint = getPoint(beasts, paths[i][currentIndex - 1]);
                    highestIndex = currentIndex - 1;
                }
            }
            //Middle path
            if (paths[i][currentIndex].toLowerCase() != 'f') {
                if (getPoint(beasts, paths[i][currentIndex]) > highestPoint) {
                    highestPoint = getPoint(beasts, paths[i][currentIndex]);
                    highestIndex = currentIndex;
                }
            }
            //Lower right path
            if (currentIndex + 1 < MAX_LENGTH_COLUMN && paths[i][currentIndex + 1].toLowerCase() != 'f') {
                if (getPoint(beasts, paths[i][currentIndex + 1]) > highestPoint) {
                    highestPoint = getPoint(beasts, paths[i][currentIndex + 1]);
                    highestIndex = currentIndex + 1;
                }
            }
            bestPath.push(highestIndex);
        }
    }
    return bestPath;
}

function findFirstPath(beasts, paths) {
    const MAX_LENGTH_COLUMN = paths.length;

    highestPoint = 0;
    indexHighest = 0;
    for (let i = 0; i < MAX_LENGTH_COLUMN; ++i) {
        if (paths[i][0].toLowerCase() != 'f') {
            if (highestPoint < getPoint(beasts, paths[i][0])) {
                highestPoint = getPoint(beasts, paths[i][0]);
                indexHighest = i;
            }
        }
    }
    return indexHighest;
}

function getPoint(beasts, value) {
    let beastsNames = ['A', 'B', 'C', 'D', 'G', 'I', 'P', 'S', 'T', 'W'];
    for (let i = 0; i < beastsNames.length; ++i) {
        if (beastsNames[i].toLowerCase() == value.toLowerCase()) {
            return beasts[i];
        }
    }
}

console.log(findPath(beasts, maze));