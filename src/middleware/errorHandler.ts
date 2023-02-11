import { Response, Request, NextFunction } from 'express';

function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void {
    res.status(500).json({
        status: err.name,
        message: err.message
    });
}

export default errorHandler;