import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
