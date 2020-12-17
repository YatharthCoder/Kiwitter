var firebaseConfig = {
    apiKey: "AIzaSyAAbYsg7bslj5q0n7cTw0GFwqfY8ySGqn4",
    authDomain: "twitter-baa52.firebaseapp.com",
    projectId: "twitter-baa52",
    storageBucket: "twitter-baa52.appspot.com",
    messagingSenderId: "171605360848",
    appId: "1:171605360848:web:cbb7f855dc41477dc91ed5",
    measurementId: "G-WF6V3WZN04"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;
  function addRoom(){
    room_name =document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kitter_room.html";
  }
  function getData(){
    firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output")})
  }
  function addUser() {
    user_name=document.getElementById("user_name").nodeValue;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser" 
    });

  }
