import User from '../src/user/user.model.js';

export const emailExists = async (email = '') => {
    const exists = await User.findOne({ email });
    if (exists) throw new Error(`El correo ${email} ya está registrado`);
};