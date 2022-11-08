import { User } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../init";

async function getUserRooms(
  user: User
): Promise<QueryDocumentSnapshot<DocumentData>[] | null> {
  if (user) {
    const CollectionRef = collection(db, "privateRooms");
    const roomSnapshot = await getDocs(
      query(CollectionRef, where("guests", "array-contains", user.email))
    );
    return roomSnapshot.docs;
  } else {
    return null;
  }
}

export default getUserRooms;
