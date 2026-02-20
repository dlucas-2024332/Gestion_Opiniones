import express from 'express';
import cors from 'cors';
import { dbConnection } from './mongo.js';
import authRoutes from '../src/auth/auth.routes.js';
import userRoutes from '../src/user/user.routes.js';
import publicationRoutes from '../src/publications/publication.routes.js';
import commentRoutes from '../src/comments/comment.routes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    async conectarDB() { await dbConnection(); }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes() {
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/user', userRoutes);
        this.app.use('/api/publications', publicationRoutes);
        this.app.use('/api/comments', commentRoutes);
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Servidor en funcionamiento ${this.port}`));
    }
}
export default Server;