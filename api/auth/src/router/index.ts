import {Router} from "express";
import userController from "../controllers/userController";
import { body } from "express-validator";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 32}),
    userController.registration
);
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers);

export default router
