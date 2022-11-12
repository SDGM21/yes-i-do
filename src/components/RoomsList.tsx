import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState, useTransition } from "react";
import { authContext } from "../context/AuthProvider";
import { RoomRequiredData } from "../firebase/config";
import getUserRooms from "../firebase/functions/getUserRooms";
import RoomCard from "./RoomCard";

const RoomsList = () => {
  const { state } = useContext(authContext);
  const [data, setData] = useState<any>(null);
  const [isTriggered, setIsTriggered] = useTransition();

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    if (state) {
      setIsTriggered(() => {
        getUserRooms(state).then((docs) => {
          if (docs) {
            const roomListData: ({ id: string } | undefined)[] = docs.map(
              (doc) => {
                if (doc) {
                  return { ...doc.data(), id: doc.id };
                }
              }
            );
            setData(roomListData);
          }
        });
      });
    }
  }, [state]);

  return (
    <div className="row col s12">
      <ul className="collection">
        {!isTriggered && data !== null ? (
          data!.map((roomData: RoomRequiredData) => {
            if (roomData) {
              return (
                <>
                  <li
                    key={roomData.id ? "1" : "2"}
                    id={roomData.id ? "0" : "1"}
                    className="collection-item avatar"
                  >
                    <RoomCard
                      title={roomData.roomName}
                      dataKey={roomData.id}
                      description={roomData.roomDescription}
                      image={"#"}
                      roomCreator={roomData.roomCreator}
                    />
                  </li>
                </>
              );
            }
          })
        ) : (
          <>
            <div>
              <h1>Loading...</h1>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default RoomsList;
