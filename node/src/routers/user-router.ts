import { Router } from 'express';
import { deleteUserController } from '../controllers/delete-user-controller';
import { getUserController } from '../controllers/get-user-controller';
import { postUserController } from '../controllers/post-user-controller';
import { putUserController } from '../controllers/put-user-controller';

export const userRouter = Router();

userRouter.get('/', getUserController);
userRouter.post('/', postUserController);
userRouter.put('/', putUserController);
userRouter.delete('/', deleteUserController);