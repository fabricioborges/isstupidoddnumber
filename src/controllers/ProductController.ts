import { Request, Response} from 'express';
import NumberService from '../services/NumberService';

interface IProduct {
    barCode: string
}

export default{
    async validateBarCode(req: Request, res: Response){
        const service = new NumberService();

        const product = req.body as IProduct;

        const isValidBarCode = service.isStupidOddNumber(product.barCode);

        return res.json(isValidBarCode);
    }
}