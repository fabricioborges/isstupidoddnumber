import { Router } from 'express';
import ProductController from '../src/controllers/ProductController';

const routes = Router();

routes.post('/products', ProductController.validateBarCode);

export default routes;