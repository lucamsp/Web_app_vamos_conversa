const firebaseConfig = {
    apiKey: "AIzaSyA3IxEDQffLGtlE-DXMIFVwnKRkTk--pX8",
    authDomain: "web-app-vamos-conversa.firebaseapp.com",
    databaseURL: "https://web-app-vamos-conversa-default-rtdb.firebaseio.com",
    projectId: "web-app-vamos-conversa",
    storageBucket: "web-app-vamos-conversa.appspot.com",
    messagingSenderId: "234877023171",
    appId: "1:234877023171:web:75aaa49b99cb30f8cb4376"
  };

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "cht_room.html";
    
}



