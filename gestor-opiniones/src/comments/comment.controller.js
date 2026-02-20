import Comment from './comment.model.js';

export const addComment = async (req, res) => {
    try {
        const { content, postId } = req.body;
        const comment = new Comment({ 
            content, 
            post: postId, 
            author: req.user._id 
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear comentario' });
    }
};

export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const comment = await Comment.findById(id);

    if (!comment) return res.status(404).json({ msg: 'Comentario no encontrado' });

    // Validación de autoría
    if (comment.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ msg: 'No puedes editar un comentario que no es tuyo' });
    }

    const updatedComment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
    res.json(updatedComment);
};

export const deleteComment = async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);

    if (!comment) return res.status(404).json({ msg: 'Comentario no encontrado' });

    if (comment.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ msg: 'No puedes eliminar un comentario ajeno' });
    }

    await Comment.findByIdAndDelete(id);
    res.json({ msg: 'Comentario eliminado correctamente' });
};