import { Actor, Dataset } from 'apify';

interface Input {
    actorId: string;
    input: string;
}
await Actor.init();

const { actorId, input } = (await Actor.getInput<Input>())!;

console.log(`Calling actor ${actorId}`);
const datasetId = (await Actor.call(actorId, input)).defaultDatasetId;
console.log(`Actor run completed. Dataset ID: ${datasetId}`);

const dataset = await Dataset.open(datasetId);
await dataset.exportToCSV('OUTPUT.csv');

const keyValueStoreId = Actor.getEnv().defaultKeyValueStoreId;
console.log('Current Key-Value Store ID:', keyValueStoreId);

await Actor.exit();
