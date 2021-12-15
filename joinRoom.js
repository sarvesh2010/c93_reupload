
var firebaseConfig = {
  apiKey: "AIzaSyA2sDTjV_ckJucsFoWY0m-RhAYBwCBtEpA",
  authDomain: "medea-c72d6.firebaseapp.com",
  databaseURL: "https://medea-c72d6-default-rtdb.firebaseio.com",
  projectId: "medea-c72d6",
  storageBucket: "medea-c72d6.appspot.com",
  messagingSenderId: "871848603500",
  appId: "1:871848603500:web:e17fff0570d8a1afbf0d49"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+"omclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "chatScreen.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Chatscreen.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "login.html";
}