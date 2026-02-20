import { Router } from 'express';
import { check } from 'express-validator';
import { validateJWT } from '../../middlewares/validate-jwt.js';
import { validateFields } from '../../middlewares/validate-fields.js';

const router = Router();

// El perfil del usuario obteniendo el token
router.get('/profile', [
    validateJWT, 
    validateFields
], (req, res) => {
    res.json({
        msg: 'Perfil del usuario',
        user: req.user
    });
});

// Para la actualizacion de los datos
router.put('/update', [
    validateJWT,
    check('username', 'El nombre de usuario no puede estar vacío').optional().not().isEmpty(),
    validateFields
], (req, res) => {
    res.json({ msg: 'Ruta de actualización lista' });
});

export default router;