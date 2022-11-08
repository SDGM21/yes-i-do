import { Timestamp } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDvK91OMFdNBWGSW8smxtqxs8mIzi0Y7gs",
  authDomain: "yes-i-do-5eef4.firebaseapp.com",
  projectId: "yes-i-do-5eef4",
  storageBucket: "yes-i-do-5eef4.appspot.com",
  messagingSenderId: "575879530685",
  appId: "1:575879530685:web:6eacd6d3b5bed30d924fd4",
};

export type RoomRequiredData = {
  id?: string;
  roomName: string;
  roomCreator?: string | null;
  roomShortD: string;
  roomDescription: string;
  roomImage?: string;
  roomPrivacy: boolean;
  roomStart?: Timestamp;
  roomFinish?: Timestamp;
  guests: string[];
};

export const initRequiredRoomData: RoomRequiredData = {
  roomName: "",
  roomCreator: "",
  roomShortD: "",
  roomDescription: "",
  roomPrivacy: false,
  guests: [],
};

export class FirebaseDate {
  tempDate: Date;
  tempTime: string;
  tempDN: "AM" | "PM";

  constructor(prevDate: Date, prevTime: string, isPmOrAm: "AM" | "PM") {
    this.tempDate = prevDate;
    this.tempTime = prevTime;
    this.tempDN = isPmOrAm;
  }

  fixHours(): number[] {
    let [fixedHour, fixedMinutes]: number[] = [
      parseInt(this.tempTime.split(":")[0]),
      parseInt(this.tempTime.split(":")[1]),
    ];

    if (this.tempDN === "PM") {
      fixedHour += 12;
    }
    return [fixedHour, fixedMinutes];
  }

  getFixedDate(): Date {
    const [hour, minutes] = this.fixHours();
    this.tempDate.setHours(hour, minutes);
    return this.tempDate;
  }
}
