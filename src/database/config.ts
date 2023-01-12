import * as dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();

let url = process.env.DATABASE_URL || '';

/* Database Connection */
async function main() {
  await mongoose.connect(url);
  console.log('connected!!');
}

main().catch(err => console.log(err));