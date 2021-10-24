import { Router } from 'express';
import { getUserController } from '../controllers/get-user-controller';
import { postUserController } from '../controllers/post-user-controller';

export const userRouter = Router();

userRouter.get('/', getUserController);
userRouter.post('/', postUserController);