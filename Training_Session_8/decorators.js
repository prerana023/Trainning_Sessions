// Implement a decorator that profiles any function execution time. Print and write to log file as well
//     ex: 
//         2024-05-12 14:58:45,788 - DEBUG - {func_name} {execution_time}
//         2024-05-12 14:58:45,788 - ERROR - {func_name} {execution_time > 10s} 
const fs = require('node:fs');


function logger(func) {
    return function() {
        const start = Date.now();
        const result = func.apply(this, arguments);
        const end = Date.now();
        const executionTime = end - start;
        const currentTime = new Date().toISOString();
        if (executionTime > 10000) {
            fs.writeFileSync('E:/Trainning/Training_Session_6/logger.txt', `${currentTime} - ERROR - ${func.name} ${executionTime}`)
        } else {
            fs.writeFileSync('E:/Trainning/Training_Session_6/logger.txt', `${currentTime} - DEBUG - ${func.name} ${executionTime}`)
        }

        return result;
    };
}

function myFunction() {
    for (let i = 0; i < 100; i++) {
        Math.sqrt(i);
    }
}

const slowFunction = () => {
    const startTime = Date.now();
    while (Date.now() - startTime < 11000) {
    }
    console.log("Function execution complete");
}

const loggedFunction = logger(myFunction);
loggedFunction();
