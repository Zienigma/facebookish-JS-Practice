var database = [
     {
         username: "bee",
         password: "123"
     },
     {
        username: "Zee",
        password: "345"
    },
    {
        username: "Cee",
        password: "456"
    }
 ];

var newsFeed = [
     {
         username: "Mandy",
         timeline: "So tired from all that learning!"
     },
     {
         username: "Sally",
         timeline: "JavaScript is soooooo coool!"
     }
 ];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username && 
            database[i].password === password) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
            console.log(newsFeed)
        } else {
            alert("Sorry, noooo.")
        }
    }



var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);