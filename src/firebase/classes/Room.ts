import {
  DocumentData,
  DocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { RoomRequiredData } from "../config";

export class Room {
  constructor(private roomData: RoomRequiredData | DocumentData) {}

  public getRoomData() {
    return this.roomData;
  }
}

export const roomConverter = {
  toFirestore: (room: Room) => {
    return room.getRoomData();
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);

    if (data) {
      return new Room(data);
    }
  },
};
