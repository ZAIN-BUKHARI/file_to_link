import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCWDsa9kWj2osIJ6jtUs0kbK_kLku4lnjY",
  authDomain: "zainywear.firebaseapp.com",
  databaseURL: "https://zainywear-default-rtdb.firebaseio.com",
  projectId: "zainywear",
  storageBucket: "zainywear.appspot.com",
  messagingSenderId: "934547833631",
  appId: "1:934547833631:web:bb582ee07d16b43823a62a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


