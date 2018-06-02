import { Router } from 'express';
import validate from 'express-validation';

import * as postController from './post.controllers';
import { authJwt } from '../../services/auth.services';
import postValidation from './post.validation';

const routes = new Router();

routes.post('/', authJwt, validate(postValidation.createPost), postController.createPost);

export default routes;
