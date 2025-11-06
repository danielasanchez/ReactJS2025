import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config={

  // your information from the firebase database

}

const app = initializeApp(config);
export const firebase = getDatabase(app);