const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass-1");
let pass2El = document.getElementById("pass-2");
let pass1arry = [];
let pass2arry = [];
let pass1 = "";
let pass2 = "";

function generate() {
    if (pass1 != "" ) {
        console.log("passwords already gened")
    }else{
        for (let i = 0; i < 16; i ++) {
            let num = Math.floor(Math.random() * characters.length)
            let num2 = Math.floor(Math.random() * characters.length)
            pass1arry.push(characters[num])
            pass2arry.push(characters[num2])
        }
        
        pass1 = (pass1arry.toString()).replace(/,/g, '');
        pass2 = (pass2arry.toString()).replace(/,/g, '');
        console.log(pass1);  
        console.log(pass2); 
        
        pass1El.textContent = pass1;
        pass2El.textContent = pass2;
        
        }
}

function  newPass() {
    pass1 = "";
    pass2 = "";
    pass1arry = []
    pass2arry = [];
    generate();
}





