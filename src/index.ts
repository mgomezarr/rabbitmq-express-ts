import bodyParser from 'body-parser'
import express, { Express, Request, Response } from 'express';
import { RabbitMQConnectionClient } from './clients/rabbitMQConnectionClient';
import { initRoutes } from './routes/web';

const PORT = 3000
const AMQP_URL = 'amqp://localhost:5672';
const QUEUE_NAME = 'eventdriven';

const app: Express = express();


app.use(bodyParser.json());

initRoutes(app);
// app.post('/register', async (req: Request, res: Response) => {
//     const { email, password } = req.body
//     console.log('Registering user...')
//     const msg = {
//         action: 'REGISTER',
//         data: { email, password },
//     };
//     // const result = await sendMessage(AMQP_URL, QUEUE_NAME, JSON.stringify(msg));
//     // return res.send(result);
// })

app.post('/login', async (req: Request, res: Response) => {
    console.log('Login user...')
    // let result: any[] = await receiveMessage(AMQP_URL, QUEUE_NAME);

    // return res.send(result);
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})