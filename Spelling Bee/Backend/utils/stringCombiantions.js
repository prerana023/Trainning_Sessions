function generateCombinations(str, minLength) {
    const combinations = [];

    function backtrack(startIndex, currentCombination) {
        if (currentCombination.length >= minLength) {
            combinations.push(currentCombination);
        }

        for (let i = startIndex; i < str.length; i++) {
            backtrack(i + 1, currentCombination + str[i]);
        }
    }

    backtrack(0, '');
    return combinations;
}

module.exports = { generateCombinations}