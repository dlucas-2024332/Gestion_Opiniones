import Publication from './publication.model.js';

export const savePublication = async (req, res) => {
    try {
        const data = req.body;
        const user = req.user; 

        const publication = new Publication({
            ...data,
            author: user._id // Se asigna el ID automaticamente
        });

        await publication.save();

        res.status(200).json({
            success: true,
            msg: 'Publicación creada',
            publication
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al crear la publicación',
            error
        });
    }

};

export const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find()
            .populate('author', 'name username'); // Trae el nombre del autor de la colección de Usuarios

        res.status(200).json({
            success: true,
            publications
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Error al obtener publicaciones' });
    }
};