import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';
import config from './app/config';

let server: Server;
async function main() {
    const a = 10;
    try {
        await mongoose.connect(config.database_url as string);
        console.log('MongoDB Database Connected Successfully');

        app.listen(config.port, () => {
            console.log(`App listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}
main();
