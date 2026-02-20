import jwt from 'jsonwebtoken';
import User from '../src/user/user.model.js';

export const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if (!token) return res.status(401).json({ msg: 'No hay token en la petición' });
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findById(uid);
        if (!user) return res.status(401).json({ msg: 'Usuario no existe' });
        req.user = user;
        next();
    } catch (e) { res.status(401).json({ msg: 'Token no válido' }); }
};