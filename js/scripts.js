$(document).ready(function(){
  $("form#form").submit(function(event){

   var numberVar1 = $("input#number1").val();
   var numberVar2 = $("input#number2").val();
   var result = 0;
   var myString = ""


 if(numberVar1 === "" || numberVar2===""){
   return alert("Please enter the number");
 }
   for (var index = 0 ; result < numberVar1 - 1; index ++) {
     result = index  * numberVar2;
     if (result>0) {
     myString += "," + result ;
     $("#finalResult").text(myString);
     $("#hidden").show();
   }
   }
   event.preventDefault();
   });
 });
