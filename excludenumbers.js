// Name: Nathália Pimentel de Assis
//University: University of Brasilia
//Bachelor student in eletronic engineering course
//Date: November 4th 2022 


function tiraNumeros(string) {
    let stringLet = "";
for(let i=0; i<string.length; i++){
   let char = string[i];
    if (char !== "0" && char!== "1" && char!== "2" && char!== "3" && char!== "4" && char!== "5" && char!== "6" && char !== "7" && char!=="8"&& char!=="9"){
        stringLet += char;
    } 
}
 return stringLet;
}
