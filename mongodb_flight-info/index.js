import { MongoClient } from "mongodb";

const uri = "mongodb+srv://vkduy18:iTCySzLiEA0mLTWX@flight-booking-info.p7xoeye.mongodb.net/?retryWrites=true&w=majority&appName=flight-booking-info";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('flight-booking-info');
    const flights = database.collection('flights');

    const query = { flightId: 'JP001' };
    const flight = await flights.findOne(query);

    console.log(flight);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
