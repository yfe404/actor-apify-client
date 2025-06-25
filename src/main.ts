import { Actor } from 'apify';
import { ApifyClient } from 'apify-client';


interface Input {
    token: string;
}
await Actor.init();

const input = await Actor.getInput<Input>();
if (!input) throw new Error('Input is missing!');
const { token } = input;

if (!token) {
    throw new Error('Please provide a `datasetId` in the input.');
}

await Actor.exit();
