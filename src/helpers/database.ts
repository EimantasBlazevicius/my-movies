import app from "../initFirebase";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { RatingsInterface } from "../components/Movies/slice/types";

export interface MoviePostInterface {
  uid: string;
  userName?: string | null;
  userPhotoURL?: string | null;
  movieTitle?: string;
  moviePoster?: string;
  opinion?: string;
  opinionRating?: number;
  ratings?: RatingsInterface[];
  director?: string;
  actors?: string;
  awards?: string;
  boxOffice?: string;
}

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

const writeMovieToUser = (data: MoviePostInterface) => {
  console.log(data);
  setDoc(doc(db, "users", data.uid), {
    uid: data.uid,
    userName: data.userName,
    userPhotoURL: data.userPhotoURL,
    movieTitle: data.movieTitle ? data.movieTitle : "",
    moviePoster: data.moviePoster ? data.moviePoster : "",
    opinion: data.opinion ? data.opinion : "",
    ratings: data.ratings ? [...data.ratings] : [],
    opinionRating: data.opinionRating,
    director: data.director ? data.director : "",
    actors: data.actors ? data.actors : "",
    awards: data.awards ? data.awards : "",
    boxOffice: data.boxOffice ? data.boxOffice : "",
  });
};

const getPosts = async () => {
  const posts: MoviePostInterface[] = [];
  const q = query(collection(db, "users"));

  const querySpanshot = await getDocs(q);
  querySpanshot.forEach((doc) => {
    posts.push(doc.data() as MoviePostInterface);
  });
  return posts;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { readUsers, writeUser, writeMovieToUser, getPosts };
