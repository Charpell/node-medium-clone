import { Router } from 'express';
import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';

import * as userController from './user.contollers';
import userValidation from './user.validation';

const routes = new Router();

routes.post('/signup', validate(userValidation.signup), userController.signUp);
routes.post('/login', authLocal, userController.login);

export default routes;
