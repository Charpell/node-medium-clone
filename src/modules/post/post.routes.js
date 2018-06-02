import { Router } from 'express';
import validate from 'express-validation';

import * as postController from './post.controllers';
import { authJwt } from '../../services/auth.services';
import postValidation from './post.validation';

const routes = new Router();

routes.post('/', authJwt, validate(postValidation.createPost), postController.createPost);

routes.get('/:id', authJwt, postController.getPostById);

routes.get('/', authJwt, postController.getPostsList);

routes.patch('/:id', authJwt, validate(postValidation.updatePost), postController.updatePost);

// Favorites
routes.post('/:id/favorite', authJwt, postController.favoritePost);

routes.delete('/:id', authJwt, postController.deletePost);

export default routes;
