import { initializeApp } from "firebase/app";
import { getStorage,ref,getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRjrt5rjrOR2D4_EjbHoWh_VV67w7u8IU",
  authDomain: "costsapp.firebaseapp.com",
  databaseURL: "https://costsapp-default-rtdb.firebaseio.com",
  projectId: "costsapp",
  storageBucket: "costsapp.appspot.com",
  messagingSenderId: "342209332612",
  appId: "1:342209332612:web:705a536b20622775d909d1",
  measurementId: "G-QQ92S64CRE"
};

export const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
console.log(storage)
export const pathReference = getDownloadURL(ref(storage, 'https://firebasestorage.googleapis.com/v0/b/costsapp.appspot.com/o/codebeautify.json?alt=media&token=e5dc52bb-034a-4211-a0da-f1174fbda773'));
console.log(pathReference)