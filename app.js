let btn = document.querySelector("#one");
let input2= document.querySelector("#two");
let input3= document.querySelector("#three");
let input4= document.querySelector("#four");
let input5= document.querySelector("#five");
let input6= document.querySelector("#six");
let input7= document.querySelector("#seven");
let msgbox1=document.querySelector(".msg");
let msgbox2=document.querySelector(".msg2");
let heading1=document.querySelector("#nine");
let container=document.querySelector(".container")
const url="https://api.countrystatecity.in/v1/countries";




btn.addEventListener("click",()=>{


 if(input2.value=="" || input3.value=="" || input4.value=="" ||  input5.value=="" ||  input6.value==""  || input7.value==""){
    heading1.innerHTML="Please fill in your details";
    console.log("hi")
    return;
}
if(!isNaN(parseInt(input4.value))){
    msgbox1.style.display="block";
    console.log("hey");}
else {
    msgbox2.style.display="block"
    container.style.display="none";
    alert("An error has occured")
    console.log("met");}
}
)
