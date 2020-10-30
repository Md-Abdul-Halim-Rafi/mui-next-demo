import firebase, { auth } from "../../firebase/firebase";

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

export const getUserActivity = () =>
  isBrowser() && window.sessionStorage.getItem("user")
    ? JSON.parse(window.sessionStorage.getItem("user"))
    : {};

export const setUserToLS = (user) =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user));

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.uid;
};

export const userSignIn = () => {
  // console.log(`userSignIn API`)
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const userDataLS = {
        uid: result.user.uid,
        gmail: result.user.email,
        userName: result.user.displayName,
        photoURL: result.user.photoURL,
      };
      setUserToLS({
        ...getUser(),
        ...userDataLS,
      })
      window.location.reload()
    })
    .catch((error) => {
      // console.log("Auth error", error)
      if (error.code === `auth/network-request-failed`) {
        alert(`There occured a network issue Please try again`);
      }
    });
};

export const userSignOut = () => {
  // console.log(`userSignOut API`)
  return new Promise((resolve) => {
    auth.signOut().then(() => {
      setUserToLS({});
      resolve();
      window.location.reload()
    });
  });
};
