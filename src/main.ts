import { Actor, Dataset } from 'apify';
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
//await Actor.call(actorId, input);
const datasetId = (await Actor.call(actorId, input)).defaultDatasetId
console.log(`Actor run completed. Dataset ID: ${datasetId}`);

//const dataset = await apifyClient.datasets.getDataset({ datasetId });
// Open a named dataset
const dataset = await Dataset.open(datasetId);
// Convert dataset items to CSV
await dataset.exportToCSV('OUTPUT.csv');

await Actor.exit();
