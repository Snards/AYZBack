import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response): void {
    res.json({ 'Mensaje': 'La API esta en /api/public/...' });
  }
}
const indexController = new IndexController();
export default indexController;