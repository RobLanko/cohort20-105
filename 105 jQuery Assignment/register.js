function User(email,password,first,last,age,address,payment,color) {
    this.email = email;
    this.password = password;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.address = address
    this.payment = payment;
    this.color = color;
}

function registerUser(){
    console.log("Button Clicked!");

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let firstName = $("#txtfirstName").val();
    let lastName = $("#txtlastName").val();
    let age = $("#txtAge").val();
    let address = $("txtAddress").val();
    let payment = $("#selPayment").val();
    let color = $("#selColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    saveUser(user);
    console.log(user);

    //HW will just be adding the let value to the rest of them

    //create object constructor for the user:
    // create a user object with data from the input fields
    // console log the object
    console.log(user);
}

function init() {
    console.log("Register page!");
    /**
     *  # = id
     * . = class
     * TAG
     */
    $("#btnSave").click(registerUser);
}


window.onload = init;