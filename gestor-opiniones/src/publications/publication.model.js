import { Schema, model } from 'mongoose';

const PublicationSchema = Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio']
    },
    category: {
        type: String,
        required: [true, 'La categoría es obligatoria']
    },
    text: {
        type: String,
        required: [true, 'El contenido es obligatorio']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Esto conecta la publicación con un usuario para poder llamarlo y verlo.
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export default model('Publication', PublicationSchema);