import { Request, Response } from "express";

export function mainController() {
    return {
        async index(req: Request, res: Response) {
            const { email, password } = req.body
            console.log('Registering user...')
            const msg = {
                action: 'REGISTER',
                data: { email, password }
            };
            console.log(msg);
            // const result = await sendMessage(AMQP_URL, QUEUE_NAME, JSON.stringify(msg));
            // return res.send(result);
        }
    }
}