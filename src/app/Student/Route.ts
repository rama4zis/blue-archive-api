import { Router } from 'express';
import studentController from './Controller';

const router = Router();
const controller = new studentController();

router.route('/student').get(controller.getStudents)
// router.route('/student').post(controller.addStudent);
router.route('/student/search').get(controller.searchStudent);
router.route('/student/:id').get(controller.getStudent);
// router.route('/student/:id').put(controller.updateStudent).delete(controller.deleteStudent);

export default router;