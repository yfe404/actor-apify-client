import { Actor } from 'apify';
import { ApifyClient } from 'apify-client';

interface Input {
    token: string,
    actorId: string,
    input: string
}
await Actor.init();

const { token, actorId, input } = inputData;

// call actorId with input
const apifyClient = Actor.newClient();
console.log(`Calling actor ${actorId}`);
await Actor.call(actorId, JSON.parse(input));

// retrieve datasets from actor runs

// save dataset as CSV under OUTPUT.csv

await Actor.exit();
