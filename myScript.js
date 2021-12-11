function validate() {
   var x=document.getElementById('_password').value;
   var y=document.getElementById('_username').value;
   if (x==""&y=="") {
        document.getElementById('validate1').style.visibility="visible";
        document.getElementById('validate2').style.visibility="visible";
   }
   else if(y==""){
     document.getElementById('validate1').style.visibility="visible";
     }
     else if (x=="") {
     document.getElementById('validate2').style.visibility="visible";
     }
     else {
       document.getElementById('validate1').style.visibility="hidden";
       document.getElementById('validate2').style.visibility="hidden";
     }






}
