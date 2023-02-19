import * as fs from 'fs';
import path from 'path';

export function searchForJsonFiles(currentPath: string) {
    const jsonFileName = 'data.json';
  
    // get a list of all files and folders in the current dir 
    const files = fs.readdirSync(currentPath);

    let allData = {};
  
    // loop through each file and folder in the current dir 
    for (const file of files) {
      // Construct the full path of the file/folder
      const filePath = path.join(currentPath, file);
  
      // Check if the file is a directory
      if (fs.statSync(filePath).isDirectory()) {
        // if it is a directory, recursively search for json files in that directory
        searchForJsonFiles(filePath);
      } else if (file === jsonFileName){
        // If it's a json file, read it and add it to the list of json files
        const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
        // do something with the json file
        // console.log(json);
        allData = { ...allData, ...json };
      }
  
    }

    // console.log(allData);
    return allData;
  
  }
  
//   searchForJsonFiles('./assets/data/students');