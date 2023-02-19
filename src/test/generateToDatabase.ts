import { PrismaClient } from "@prisma/client";
import fs from 'fs';
import { detailStudentType, studentType } from './model';

const studentsFile = './data/student.json';
const detailStudentsFile = './data/detailStudent.json';

const data1 = fs.readFileSync(studentsFile, 'utf8');
const data2 = fs.readFileSync(detailStudentsFile, 'utf8');

let rawStudents: studentType[] = JSON.parse(data1);
let rawDetailStudents: detailStudentType[] = JSON.parse(data2);

for (let i = 0; i < rawStudents.length; i++) {
  rawStudents[i].detailStudent = rawDetailStudents[i];
}

// upload data to database  
const prisma = new PrismaClient();

async function main() {
  for (const student of rawStudents) {
    const folderName = student.name.toLowerCase().split(' ').join('-');

    const data = fs.readFileSync(`./assets/data/students/${folderName}/data.json`, 'utf8');
    const studentData: studentType = JSON.parse(data);

    const payload = {
      name: studentData.name,
      rarity: studentData.rarity,
      isLimited: studentData.isLimited,
      school: studentData.school,
      role: studentData.role,
      position: studentData.position,
      attackType: studentData.attackType,
      armorType: studentData.armorType,
      combatClass: studentData.combatClass,
      weaponType: studentData.weaponType,
      usesCover: studentData.usesCover,
      detailStudent: {
        japaneseName: studentData.detailStudent.japaneseName,
        japaneseReadings: studentData.detailStudent.japaneseReadings,
        age: studentData.detailStudent.age,
        birthday: studentData.detailStudent.birthday,
        height: studentData.detailStudent.height,
        hobbies: studentData.detailStudent.hobbies,
        voiceActor: studentData.detailStudent.voiceActor,
        releaseDate: studentData.detailStudent.releaseDate,
      },
      urban: studentData.urban,
      outdoor: studentData.outdoor,
      indoor: studentData.indoor
    };

    const newStudent = await prisma.student.create({
      data: payload
    });
    console.log('data successfully uploaded to database');
    console.log(newStudent);
  }
}

main()