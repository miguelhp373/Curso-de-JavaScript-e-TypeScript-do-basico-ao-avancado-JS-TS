const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readDir(rootDir);
    walk(files);
    
}

function walk(){
    for(let file of files){
        console.log(file);
    }
}

readDir('../');