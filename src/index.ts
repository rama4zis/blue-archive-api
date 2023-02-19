import express from 'express';
import { Response } from 'express';
import studentRouter from './app/Student/Route';
import notFound from './middleware/404';
import errorHandler from './middleware/errorHandler';

const app = express();

const port = process.env.PORT || 3000; // default port to listen

app.use(express.json());

// home route 
app.get('/', (_req, res: Response): void => {
    res.status(200).json({
        message: 'Blue Archive Companion API'
    });
});

app.use('/api/v1', studentRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, (): void => {
    console.log(`server running on port ${ port }`);
});