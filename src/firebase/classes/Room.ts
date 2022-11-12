import {
  dataKeys,
  FirebaseDate,
  materialzeTimeDate,
  RoomRequiredData,
  RoomRequiredDataIndex,
} from "./../config";
import {
  DocumentData,
  DocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from "firebase/firestore";
export class Room extends FirebaseDate {
  constructor(private rData: RoomRequiredData | DocumentData) {
    super(new Date(), "00:00", "PM");
  }

  public set setData(v: RoomRequiredData) {
    this.rData = v;
  }

  public get() {
    return this.rData;
  }

  dataCheck(data?: RoomRequiredData): boolean {
    const i: RoomRequiredDataIndex[] = Object.keys(
      this.rData
    ) as RoomRequiredDataIndex[];

    for (let index = 0; index < i.length - 1; index++) {
      if (data === undefined) {
        if (this.rData[i[index]] === null) {
          return false;
        }
      } else {
        if (data[i[index]] === null) {
          return false;
        }
      }
    }

    return true;
  }
}

export const roomConverter = {
  toFirestore: (room: Room) => {
    return room.get();
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);

    if (data) {
      return new Room(data);
    }
  },
};
