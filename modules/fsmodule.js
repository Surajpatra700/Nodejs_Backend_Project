const fs = require('fs');
// fs.readFile('file/file1.txt', 'utf-8', (err, data)=> {
//     if(err == true){
//         console.log(err);
//     }
//     console.log(data);
// })

// const a = fs.readFileSync('file/file1.txt')
// console.log(a.toString())

// console.log("Finished reading file");

fs.writeFile('file/file2.txt','Hello i am Suraj, lets Develop a codebase', ()=>{
    console.log("Written to file2.txt")
});
console.log("Finished Writting file");