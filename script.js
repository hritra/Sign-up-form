function checkPassword(){
    let password = document.getElementById("pass").value;
    let cnfrmPassword = document.getElementById("conpass").value;
    console.log(password,cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords Match";
            message.style.backgroundColor = "#3ae374";
        }
        else{
            message.textContent = "Passwords do not match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
}