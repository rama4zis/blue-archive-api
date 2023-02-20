import * as fs from 'fs';
import { detailStudentType, studentType } from './model';

// const filename = './data/multiple.json';
const studentsFile = './data/student.json';
const detailStudentsFile = './data/detailStudent.json';

const data1 = fs.readFileSync(studentsFile, 'utf8');
const data2 = fs.readFileSync(detailStudentsFile, 'utf8');

let rawStudents: studentType[] = JSON.parse(data1);
let rawDetailStudents: detailStudentType[] = JSON.parse(data2);

for (let i = 0; i < rawStudents.length; i++) {

  // find by compare "name" with "Character"
  const detailStudent = rawDetailStudents.find((detailStudent) => {
    return detailStudent.Character === rawStudents[i].name;
  });

  // if found, add to student
  if (detailStudent) {
    rawStudents[i].detailStudent = detailStudent;
  }

}

// make folder with name 
for (const student of rawStudents) {
  const folderName = student.name.toLowerCase().split(' ').join('-');

  // make directory from the name 
  // if exsit, replace it
  if (fs.existsSync(`./assets/data/students/${folderName}`)) {
    fs.rmdirSync(`./assets/data/students/${folderName}`, { recursive: true });
  }
  fs.mkdirSync(`./assets/data/students/${folderName}`);

  // make file data.json
  if (fs.existsSync(`./assets/data/students/${folderName}/data.json`)) {
    fs.unlinkSync(`./assets/data/students/${folderName}/data.json`);
  }
  fs.writeFileSync(`./assets/data/students/${folderName}/data.json`, JSON.stringify(student, null, 2));
}


