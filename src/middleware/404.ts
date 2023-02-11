import { Request, Response, NextFunction } from 'express';

function notFound(_req: Request, res: Response, _next: NextFunction): void {
    res.status(404).json({
        message: 'Not Found'
    });
}



export default notFound; 