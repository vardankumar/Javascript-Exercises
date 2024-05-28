
function generatePassword(){
    const passlen =     document.getElementById('passlen').value
    document.getElementById('len').innerText = passlen
    
    
    const isUppercase = document.getElementById("uppercase").checked 
    const isNumeric = document.getElementById("numbers").checked                 
    const isSpecial = document.getElementById("characters").checked
    
    let passwordText = "abcdefghijklmnopqrstuvwxyz"
    if(isUppercase) passwordText += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(isNumeric) passwordText += "0123456789"
    if(isSpecial) passwordText += "!@#$%^&*()_+"
    
    let password = ""
    for (let i = 0; i < passlen; i++) {
        password += passwordText.charAt(Math.floor(Math.random() * passwordText.length))
    }
    document.getElementById("password").value = password;
    return password
}

// generatePassword()