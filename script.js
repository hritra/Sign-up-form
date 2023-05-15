function checkPassword(){
    let password = document.getElementById("pass").value;
    let cnfrmPassword = document.getElementById("conpass").value;
    console.log(password,cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords Match";
        }
        else{
            message.textContent = "Passwords do not match";
        }
    }
}