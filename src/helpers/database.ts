import {
  getFirestore,
  collection,
  query,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import app from "../initFirebase";

const db = getFirestore(app);

const readUsers = async () => {
  const users: string[] = [];
  const q = query(collection(db, "users"));

  const querySpanshot = await getDocs(q);
  querySpanshot.forEach((doc) => {
    users.push(doc.id);
  });
  return users;
};

const writeUser = (uid: string) => {
  readUsers().then((users) => {
    if (!users.includes(uid)) {
      setDoc(doc(db, "users", uid), {
        uid: uid,
      });
    }
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { readUsers, writeUser };
