import { Router } from 'express';
import { check } from 'express-validator';
import { validateJWT } from '../../middlewares/validate-jwt.js';
import { validateFields } from '../../middlewares/validate-fields.js';

const router = Router();

// Ejemplo de ruta para obtener el perfil del usuario autenticado
router.get('/profile', [
    validateJWT, // Primero verificamos que el token sea válido
    validateFields
], (req, res) => {
    res.json({
        msg: 'Perfil del usuario',
        user: req.user
    });
});

// Ejemplo de ruta para actualizar datos (puedes expandir esto luego)
router.put('/update', [
    validateJWT,
    check('username', 'El nombre de usuario no puede estar vacío').optional().not().isEmpty(),
    validateFields
], (req, res) => {
    res.json({ msg: 'Ruta de actualización lista' });
});

export default router;