import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8uXJuSUvDv5qMxl23QXG8jhg_kePBtQc",
  authDomain: "portal-airsoft-rs-c9895.firebaseapp.com",
  databaseURL: "https://portal-airsoft-rs-c9895-default-rtdb.firebaseio.com",
  projectId: "portal-airsoft-rs-c9895",
  storageBucket: "portal-airsoft-rs-c9895.appspot.com",
  messagingSenderId: "918019414209",
  appId: "1:918019414209:web:ff863e06aa553e389d5c40"
};

export const app = initializeApp(firebaseConfig);