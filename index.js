const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(Math.random())
let counter = 0
function generateRandomPassword(){
    counter++
    let password = ""

    for(let i=0; i<8; i++){
        password += characters[Math.floor(Math.random() * characters.length)]
    }

    if(counter === 1)
        document.getElementById("first-password").textContent = password
    else if(counter === 2)
        document.getElementById("second-password").textContent = password
    else{
        counter = 1;
        document.getElementById("first-password").textContent = password

    }
        

    
     
}