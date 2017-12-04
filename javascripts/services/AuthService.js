'use strict';

app.service("AuthService", function ($window, FIREBASE_CONFIG) {
  const authenticateGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const isAuthenticated = () => {
    return firebase.auth().currentUser ? true : false;
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  const getCurrentUid = () => {
    const localStorageKey = `firebase:authUser:${FIREBASE_CONFIG.apiKey}:[DEFAULT]`;
    const cookie = JSON.parse($window.localStorage[localStorageKey]);
    return cookie.uid;
  };

  return { authenticateGoogle, isAuthenticated, logout, getCurrentUid };
});