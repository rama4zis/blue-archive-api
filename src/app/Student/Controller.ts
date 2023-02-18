import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const filename = './data/multiple.json';

const prisma = new PrismaClient();


interface studentType {
    name: string;
    rarity: number;
    isLimited: boolean;
    school: string;
    role: string;
    position: string;
    attackType: string;
    armorType: string;
    combatClass: string;
    weaponType: string;
    usesCover: boolean;

    detailStudent: {
        japaneseName: string;
        japaneseReadings: string;
        age: number;
        birthday: string;
        height: string;
        hobbies: string;
        voiceActor: string;
        releaseDate: string;
    };

    urban: string;
    outdoor: string;
    indoor: string;

    image: string;
}

class Student {

    async getStudents(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const students = await prisma.student.findMany();

            res.status(200).json(students);
        } catch (error) {
            next(error);
        }
    }

    async getStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;

            const student = await prisma.student.findUnique({
                where: {
                    id: Number(id)
                }
            });

            res.status(200).json(student);
        } catch (error) {
            next(error);
        }
    }

    async addStudent(req: Request, res: Response, next: NextFunction): Promise<void> {

        try {
            const body: studentType = req.body;
            const payload = {
                name: body.name,
                rarity: body.rarity,
                isLimited: body.isLimited,
                school: body.school,
                role: body.role,
                position: body.position,
                attackType: body.attackType,
                armorType: body.armorType,
                combatClass: body.combatClass,
                weaponType: body.weaponType,
                usesCover: body.usesCover,
                detailStudent: body.detailStudent,
                urban: body.urban,
                outdoor: body.outdoor,
                indoor: body.indoor,
                image: body.image
            };

            const student = await prisma.student.create({
                data: payload
            });

            res.status(200).json({
                message: 'Student added successfully',
                student
            })
        } catch (error) {
            next(error);
        }

    }

    async updateStudent(req: Request, res: Response, next: NextFunction): Promise<void> {

        try {
            const body: studentType = req.body;
            const payload = {
                name: body.name,
                rarity: body.rarity,
                isLimited: body.isLimited,
                school: body.school,
                role: body.role,
                position: body.position,
                attackType: body.attackType,
                armorType: body.armorType,
                combatClass: body.combatClass,
                weaponType: body.weaponType,
                usesCover: body.usesCover,
                detailStudent: body.detailStudent,
                urban: body.urban,
                outdoor: body.outdoor,
                indoor: body.indoor,
                image: body.image
            };

            const student = await prisma.student.update({
                where: {
                    id: Number(req.params.id)
                },
                data: payload
            });

            res.status(200).json({
                message: 'Student added successfully',
                student
            })
        } catch (error) {
            next(error);
        }

    }


    // Test offline file 

    fileStudents(_req: Request, res: Response, _next: NextFunction): void {

        interface fileStudent {
            Character: string;
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
            const filterStrudents = students.map((student) => {
                return {
                    name: student.Character,
                    school: student.school,
                }
            });

            res.status(200).json(filterStrudents);

        });
    }




}

export default Student;