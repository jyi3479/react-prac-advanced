import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYryLiLachvY3zEfkyfspip0hYw58lDsU",
  authDomain: "my-image-community.firebaseapp.com",
  projectId: "my-image-community",
  storageBucket: "my-image-community.appspot.com",
  messagingSenderId: "448571041499",
  appId: "1:448571041499:web:db0fe54c6f4db637368efe",
  measurementId: "G-RXFPXGPNYS",
};

// firebase 초기화
firebase.initializeApp(firebaseConfig);

// 인증 만들기
const auth = firebase.auth();

export { auth };
