import { Express } from 'express';
import { mainController } from '../controllers/mainController';

export function initRoutes(app: Express) {
    app.post('/register', mainController().index);
}