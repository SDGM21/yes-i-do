import { RoomRequiredData, RoomRequiredDataIndex } from "./../config";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { Room, roomConverter } from "../classes/Room.js";
import { db } from "../init";

const createNewRoom = async (
  newData?: RoomRequiredData
): Promise<string | boolean | DocumentReference<DocumentData> | unknown> => {
  const roomNewRef = collection(db, "privateRooms");

  if (newData !== undefined) {
    const i: RoomRequiredDataIndex[] = Object.keys(
      newData
    ) as RoomRequiredDataIndex[];

    for (let index = 0; index < i.length - 1; index++) {
      if (newData[i[index]] === null) {
        return false;
      }
    }
    try {
      const newRoomRef = await addDoc(roomNewRef, newData);
      return newRoomRef;
    } catch (error) {
      return error;
    }
  }
};

export default createNewRoom;
