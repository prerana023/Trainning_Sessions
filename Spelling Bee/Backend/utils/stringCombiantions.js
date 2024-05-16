// function generateCombinations(str, minLength) {
//     const combinations = [];

//     function backtrack(startIndex, currentCombination) {
//         if (currentCombination.length >= minLength) {
//             combinations.push(currentCombination);
//         }

//         for (let i = startIndex; i < str.length; i++) {
//             backtrack(i + 1, currentCombination + str[i]);
//         }
//     }

//     backtrack(0, '');
//     return combinations;
// }

// module.exports = { generateCombinations}

function generateCombinations(str, minLength, maxLength) {
    const combinations = [];

    function backtrack(startIndex, currentCombination) {
        if (currentCombination.length <= maxLength) {
            combinations.push(currentCombination); // Pushing every combination
        }

        if (currentCombination.length >= maxLength) {
            return; // Stop further exploration
        }

        for (let i = startIndex; i < str.length; i++) {
            backtrack(i, currentCombination + str[i]); // Allowing repetition by not incrementing i
        }
    }

    backtrack(0, '');
    return combinations.filter(combination => combination.length >= minLength); // Filtering by minimum length
}

module.exports = { generateCombinations };

