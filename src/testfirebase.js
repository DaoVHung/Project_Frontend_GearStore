import React from 'react'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbX2JHqGAmqz_6T-4PH7cIS9_izfgFlVI",
  authDomain: "project-module-5-62b7d.firebaseapp.com",
  projectId: "project-module-5-62b7d",
  storageBucket: "project-module-5-62b7d.appspot.com",
  messagingSenderId: "778629974310",
  appId: "1:778629974310:web:2472ef3520f0309c4399e7",
  measurementId: "G-ZTQ0VVQ6FK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);