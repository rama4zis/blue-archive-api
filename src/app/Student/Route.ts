import { Router } from 'express';
import studentController from './Controller';

const router = Router();
const controller = new studentController();

router.route('/student').get(controller.getStudents).post(controller.addStudent);
router.route('/student/:id').get(controller.getStudent).put(controller.updateStudent);

export default router;