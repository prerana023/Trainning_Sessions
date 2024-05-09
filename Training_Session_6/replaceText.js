let fs = require('fs');

fs.readFile('./Files/sample.txt','utf-8',(err, texts) =>{
    if(err){
        console.log(err)
    }
    else{
        const updatedTextFile = texts.replaceAll("Hello", "Hi")

        fs.writeFile('./Files/sample.txt', updatedTextFile, 'utf-8', error =>{
            if(error){
                console.log(error)
            }
        })
    }
} )
