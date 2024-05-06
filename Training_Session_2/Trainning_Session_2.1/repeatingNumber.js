//Problem: Find Most Frequently Repeating Number in a List


/**
 * 
 * 
 * This function finds the most repeating numbers in a list and returns the repeating number
 * If multiple numbers are repeating then it stores the number in an array and returns a random number from that array 
 * 
 * @param {Array} numbers 
 * @returns 
 */


function find_most_frequent(numbers){
    const mappedList = new Map();
    numbers.forEach(listElement =>{
        if(mappedList.has(listElement)){
            let max_frequency = mappedList.get(listElement);
            mappedList.set(listElement, max_frequency += 1 )
        }
        else{
            mappedList.set(listElement, 1 )
        }
    });

    let maxFrequency = 0;
    let mostFrequentNumbers = [];
    mappedList.forEach((frequency, number) => {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentNumbers = [number];
        } else if (frequency === maxFrequency) {
            mostFrequentNumbers.push(number);
        }
    });
    const randomIndex = Math.floor(Math.random() * mostFrequentNumbers.length);

    return console.log("Most repetative number in list is: ", mostFrequentNumbers[randomIndex]);
}

const result = find_most_frequent([1, 2, 3, 2, 4, 2, 3, 4, 3]);
