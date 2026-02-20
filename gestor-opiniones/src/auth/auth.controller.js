import bcryptjs from 'bcryptjs';
import User from '../user/user.model.js';
import { generateJWT } from '../../helpers/generate-jwt.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password: bcryptjs.hashSync(password, 10) });
    await user.save();
    res.status(201).json({ msg: 'Usuario creado', user });
};

export const login = async (req, res) => {
    const { identifier, password } = req.body;
    const user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });
    if (!user || !bcryptjs.compareSync(password, user.password)) {
        return res.status(400).json({ msg: 'Credenciales inválidas' });
    }
    const token = await generateJWT(user.id);
    res.json({ user, token });
};