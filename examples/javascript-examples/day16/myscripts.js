function validateUser() {
    let user = document.getElementById("i1").value;
    let pass = document.getElementById("i2").value;
    if(user.length == 0) {
        alert('Username cannot be empty');
        return false;
    }
    if(pass.length == 0) {
        alert('Password cannot be empty');
        return false;
    }
    return true;
}