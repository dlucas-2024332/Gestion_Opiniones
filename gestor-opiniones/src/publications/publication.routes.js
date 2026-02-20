import { Router } from 'express';
import { getPublications, savePublication } from './publication.controller.js';
import { validateJWT } from '../../middlewares/validate-jwt.js';

const router = Router();

router.get('/', getPublications);

router.post('/', [
    validateJWT // Protegemos la ruta para que solo usuarios logueados publiquen
], savePublication);

export default router;