function displayUsers(users){
//travel the list with for loop
for(let i =0; i < users.length; i++){
    //get each user
    let user = users[i];

    //display the user
    let syntax = 
    `<tr>
    <td>${user.email}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.age}</td>
    <td>${user.payment}</td>
    <td>${user.address}</td>
    <td>${user.phone}</td>
    <td>${user.color}</td>
    </tr>`

    $("#tblUsers").append(syntax);
}

}

function init() {
    console.log("Listing Users")

    var users = readUsers();
    displayUsers(users);

}

window.onload = init;