import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

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

    async getStudents(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const page = req.query.page ? Number(req.query.page) * 50 : 0;
            const students = await prisma.student.findMany({
                skip: page,
                take: 50
            });

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

    async deleteStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;

            const student = await prisma.student.delete({
                where: {
                    id: Number(id)
                }
            });

            res.status(200).json({
                message: 'Student deleted successfully',
                student
            })
        } catch (error) {
            next(error);
        }
    }

}

export default Student;