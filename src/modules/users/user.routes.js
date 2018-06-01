import { Router } from 'express';
import validate from 'express-validation';

import * as userController from './user.contollers';
import userValidation from './user.validation';

const routes = new Router();

routes.post('/signup', validate(userValidation.signup), userController.signUp);

export default routes;
