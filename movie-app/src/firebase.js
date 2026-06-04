import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgilerin (kendi bilgilerini buraya gir)
const firebaseConfig = {
  apiKey: "KENDİ API ANAHTARINI BURAYA GİR",
  authDomain: "KENDİ AUTH DOMAIN'İNİ BURAYA GİR",
  projectId: "KENDİ PROJE ID'İNİ BURAYA GİR",
  storageBucket: "KENDİ STORAGE BUCKET'İNİ BURAYA GİR",
  messagingSenderId: "KENDİ MESSAGING SENDER ID'İNİ BURAYA GİR",
  appId: "KENDİ APP ID'İNİ BURAYA GİR",
};

// Firebase'i BAŞLAT (Sadece bir kere)
const app = initializeApp(firebaseConfig);

// db'yi DIŞA AKTAR
export const db = getFirestore(app);