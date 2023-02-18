import * as fs from 'fs';

const filename = './data/multiple.json';

interface fileStudent {
  name: string;
  japaneseName: string;
  japaneseReading: string;
  school: string;
  age: string;
  birthday: string;
  height: string;
  hobbies: string;
  voicedActor: string;
  releaseDate: string;
}

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }

  const students: fileStudent[] = JSON.parse(data);

  // make folder with name 
  for (const student of students) {
      const folderName = student.name.toLowerCase().split(' ').join('-');

      // make directory from the name 
      fs.mkdirSync(`./assets/data/students/${folderName}`);

      // make file data.json
      fs.writeFileSync(`./assets/data/students/${folderName}/data.json`, JSON.stringify(student));
  }

  const filterStrudents = students.map((student) => {
      return {
          name: student.name,
          school: student.school,
      }
  });

  console.log(filterStrudents);

});
