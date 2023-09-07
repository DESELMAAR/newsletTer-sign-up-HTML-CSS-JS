

const mainpage =   document.getElementById("main");

const validmsg = document.getElementById("validmsg");


const divparent = document.getElementById("insertionpara");

// onclick button 
function validationonclick(){
  const inpute= document.getElementById("inp").value;

  validmsg.style.visibility="visible";



  mainpage.style.visibility="hidden" ; 


  inner(inpute);
}

// insert paragraph with email variable
function inner(email){
  // console.log(email);
 
  const para0 = document.createElement("p");
  const text = document.createTextNode(`A confirmation email has been sent to ${email} Please open it and click the button inside to confirm your subscription.`);
  para0.appendChild(text);
 divparent.appendChild(para0);

}
// dismiss button function
function dismismessage(){
  validmsg.style.visibility="hidden";
  divparent.innerHTML="";
  mainpage.style.visibility="visible" ;
}