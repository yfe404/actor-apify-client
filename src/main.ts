import { Actor } from 'apify';
import { ApifyClient } from 'apify-client';

interface Input {
    actorId: string,
    input: string
}
await Actor.init();

const { actorId, input } = (await Actor.getInput<Input>())!;

// call actorId with input
const apifyClient = Actor.newClient();
console.log(`Calling actor ${actorId}`);
await Actor.call(actorId, JSON.parse(input));


//const runId = (await Actor.call(actorId, JSON.parse(input))).id;
//const dataset = await apifyClient.dataset(runId);


// then convert `dataset.items` to CSV and save under OUTPUT.csv, e

// retrieve datasets from actor runs

// save dataset as CSV under OUTPUT.csv

await Actor.exit();
