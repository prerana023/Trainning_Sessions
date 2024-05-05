//Exercise 1: Reverse a list in Python
//Approach 1:

const List = [100, 200, 300, 400, 500];
const reversedList = []
const maxListLength = List.length-1

for( maxListLength; maxListLength>=0; --maxListLength){
    reversedList.push(List[maxListLength])
    console.log(reversedList)
}

//Approach 2
List.reverse();
console.log(List)


//Exercise 2: Concatenate two lists index-wise
const list1 = ["M", "na", "i", "Ke"];
const list2 = ["y", "me", "s", "lly"];

const concatedList = [];

for(i=0; i<list1.length; i++){
    const concatedList = list1[i].concat(list2[i])
    newList.push(concatedList)
    console.log(newList)

}

//Exercise 3: Turn every item of a list into its square

const numbers = [1, 2, 3, 4, 5, 6, 7]
const newArr = numbers.map((n) => Math.pow(n, 2))
console.log(newArr);

//for ex-4
const list3 = ["Hello ", "take "];
const list4 = ["Dear", "Sir"];
const concatList = [];

for (let i = 0; i < list3.length; i++) {
    for (let j = 0; j < list4.length; j++) {
        concatList.push(list3[i].concat(list4[j]));
    }
}

console.log(concatList)

//ex-5
const list8 = [10, 20, 30, 40];
const list9 = [100, 200, 300, 400];

for (let i = 0; i < list8.length; i++) {
    const item1 = list8[i];
    const item2 = list9[list9.length - 1 - i];

    console.log(item1, item2);
}

//Exercise 6: Remove empty strings from the list of strings
const list5 = ["Mike", "", "Emma", "Kelly", "", "Brad"];
const filteredList = list5.filter(str => str !== "");
console.log(filteredList);

//Exercise 7: Add new item to list after a specified item
const list6 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40];

for (let i = 0; i < list6.length; i++) {
    if (Array.isArray(list6[i])) {
        for (let j = 0; j < list6[i].length; j++) {
            if (Array.isArray(list6[i][j])) {
                for (let k = 0; k < list6[i][j].length; k++) {
                    if (list6[i][j][k] === 6000) {
                        list6[i][j].splice(k + 1, 0, 7000);
                        console.log( list6);
                    }
                }
            }
        }
    }
}


// Replace list’s item with new value if found
const list = [5, 10, 15, 20, 25, 50, 20];

const indexToReplace = list.indexOf(20);

if (indexToReplace !== -1) {
    list[indexToReplace] = 200;
}

console.log(list);


// Remove all occurrences of a specific item from a list.
const list7 = [5, 10, 15, 20, 25, 50, 20];

const duplicates = list7.filter((item, index) => list7.indexOf(item) !== index);

for (let i = 0; i < duplicates.length; i++) {
    const indexToRemove = list7.indexOf(duplicates[i]);
    console.log(indexToRemove)
    list7.splice(indexToRemove, 1);
}

console.log(list7);

//Exercise 8: Extend nested list by adding the sublist


const list10 = ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"];

const sub_list = ["h", "i", "j"];

const concatSubList = [];

for (let i = 0; i < list10.length; i++) {
    if (Array.isArray(list10[i])) {
        for (let j = 0; j < list10[i].length; j++) {
            if (Array.isArray(list10[i][j])) {
                for (let k = 0; k < list10[i][j].length; k++) {
                    if (Array.isArray(list10[i][j][k])) {
                        list10[i][j][k] = list10[i][j][k].concat(sub_list);
                    }
                }
            }
        }
    }
}

console.log("list10 after sub_list concatenated:", list10);


