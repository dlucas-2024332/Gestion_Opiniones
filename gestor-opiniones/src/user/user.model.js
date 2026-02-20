import { Schema, model } from 'mongoose';
const UserSchema = Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
UserSchema.methods.toJSON = function() {
    const { password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
};
export default model('User', UserSchema);