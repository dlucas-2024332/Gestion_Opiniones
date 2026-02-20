import { Router } from 'express';
import { check } from 'express-validator';
import { validateJWT } from '../../middlewares/validate-jwt.js';
import { validateFields } from '../../middlewares/validate-fields.js';
import { addComment, updateComment, deleteComment } from './comment.controller.js';

const router = Router();

router.post('/', [
    validateJWT,
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    check('postId', 'El ID del post debe ser válido').isMongoId(),
    validateFields
], addComment);

router.put('/:id', [
    validateJWT,
    check('content', 'El contenido no puede estar vacío').not().isEmpty(),
    validateFields
], updateComment);

router.delete('/:id', [validateJWT], deleteComment);

export default router;