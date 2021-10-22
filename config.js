import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyDCJY2ov5eITr3t0eoutxWtEo2aN1IlHP8",
        authDomain: "voting-1f74d.firebaseapp.com",
        databaseURL: "https://voting-1f74d-default-rtdb.firebaseio.com",
        projectId: "voting-1f74d",
        storageBucket: "voting-1f74d.appspot.com",
        messagingSenderId: "967910524188",
        appId: "1:967910524188:web:58b3ec54b099046108a6d9"
      

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();