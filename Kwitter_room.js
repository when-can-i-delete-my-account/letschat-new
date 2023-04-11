var firebaseConfig = {
    apiKey: "AIzaSyDSaxYpedq-72TSUsmM1A5QjvNpzPvV3t0",
    authDomain: "kwitter-8af24.firebaseapp.com",
    databaseURL: "https://kwitter-8af24-default-rtdb.firebaseio.com",
    projectId: "kwitter-8af24",
    storageBucket: "kwitter-8af24.appspot.com",
    messagingSenderId: "50369796311",
    appId: "1:50369796311:web:364f3d76f6aedb40803892"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value = "";
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

  document.getElementById("msg").value ="";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}