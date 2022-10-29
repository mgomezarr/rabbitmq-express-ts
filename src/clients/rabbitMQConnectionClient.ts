import amqp, { Channel, Connection } from 'amqplib';

export class RabbitMQConnectionClient {
    
    constructor() { }
    
    public async sendMessage(amqpUrl: string, queueName: string, msg: string): Promise<boolean> {
        const conn: Connection = await amqp.connect(amqpUrl, (err: Error) => { if (err) throw err; });
        const channel: Channel = await conn.createChannel();
        await channel.assertQueue(queueName);
        return channel.sendToQueue(queueName, Buffer.from(msg));
    };

    public async receiveMessage(amqpUrl: string, queueName: string): Promise<any[]> {
        let result: any[] = [];
        const conn: Connection = await amqp.connect(amqpUrl, (err: Error) => { if (err) throw err; });
        const channel: Channel = await conn.createChannel();
        await channel.assertQueue(queueName);
        await channel.prefetch(1);
        await channel.consume(queueName, (data) => {
            if (data) {
                result.push(JSON.parse(data.content.toString()));
            };
        });
        return result;
    };
};