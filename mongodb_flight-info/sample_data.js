import { MongoClient } from 'mongodb';

import flights from './sample_data_flights.js';
import bookings from './sample_data_bookings.js';
import users from './sample_data_users.js';

const uri = "mongodb+srv://vkduy18:iTCySzLiEA0mLTWX@flight-booking-info.p7xoeye.mongodb.net/?retryWrites=true&w=majority&appName=flight-booking-info";
const client = new MongoClient(uri);

const db = client.db("flight-booking-info")
const flightsColl = db.collection("flights")
const bookingsColl = db.collection("bookings")
const usersColl = db.collection("users")

try {
  let insertManyresult = await flightsColl.insertMany(flights);
  let ids = insertManyresult.insertedIds;

  console.log(`${insertManyresult.insertedCount} documents were inserted.`);
  for (let id of Object.values(ids)) {
    console.log(`Inserted a document with id ${id}`);
  }

  insertManyresult = await bookingsColl.insertMany(bookings);
  ids = insertManyresult.insertedIds;

  console.log(`${insertManyresult.insertedCount} documents were inserted.`);
  for (let id of Object.values(ids)) {
    console.log(`Inserted a document with id ${id}`);
  }
  
  insertManyresult = await usersColl.insertMany(users);
  ids = insertManyresult.insertedIds;

  console.log(`${insertManyresult.insertedCount} documents were inserted.`);
  for (let id of Object.values(ids)) {
    console.log(`Inserted a document with id ${id}`);
  }
} finally {
  await client.close();
} catch(e) {
  console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
  let ids = e.result.result.insertedIds;
  for (let id of Object.values(ids)) {
    console.log(`Processed a document with id ${id._id}`);
  }
  console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
}
