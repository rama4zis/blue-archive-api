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

    urban: string;
    outdoor: string;
    indoor: string;

    releaseDate: string;
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
                urban: body.urban,
                outdoor: body.outdoor,
                indoor: body.indoor,
                releaseDate: body.releaseDate
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
}

export default Student;