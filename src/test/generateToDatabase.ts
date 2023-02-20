import { PrismaClient } from "@prisma/client";
import { searchForJsonFiles } from "./readAllData";

const rawStudents = searchForJsonFiles('./assets/data/students');

// upload data to database  
const prisma = new PrismaClient();

async function main() {

  for (const studentData of rawStudents) {
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

    const student = await prisma.student.create({
      data: payload
    });

    console.log(student);
  }

  console.log('All data uploaded to database');

}

main()