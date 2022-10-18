function validateForm(){
  var name= document.getElementById("name").value;
  var date= document.getElementById("date").value;
  var email= document.getElementById("email").value;
  var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}/;
  var number = document.getElementById("number").value;
  var numberregex =/^[6-9]\d{9}/
  var gender=document.myform.gender.value;
  var country = document.getElementById("country").value;
  var checkBox= document.getElementById("mycheck");
  
  var valid = true

  if (name==''||name==null||name==undefined){
     valid = false
    document.getElementById("uname").innerHTML="Name is required feild"
    document.getElementById("name").setAttribute('required','required');
  }
else{
  document.getElementById("uname").innerHTML=""
}

if(date==''||date==null||date==undefined){
  valid = false
  document.getElementById("udate").innerHTML=" Date is required feild"
  document.getElementById("date").setAttribute('required','required');
}
else{
  document.getElementById("udate").innerHTML=""
}

 
 if (email==''||email==null||email==undefined) {
  valid = false
  document.getElementById("uemail").innerHTML="Email is required feild"
   document.getElementById("email").setAttribute('required','required');
 }else if (emailregex.test(email)== false) {
  valid = false
  document.getElementById("uemail").innerHTML="please enter a valid email "
 }
else{
  document.getElementById("uemail").innerHTML=""
}

 if (number==''||number==null||number==undefined||number== 10) {
  valid = false
   document.getElementById("unumber").innerHTML=" Number required feild"
  document.getElementById("number").setAttribute('required','required');
 }else if (numberregex.test(number)== false){
  valid = false
  document.getElementById("unumber").innerHTML="please enter correct number"
 }
 else{
  document.getElementById("unumber").innerHTML=""
 }

 
 if(gender==''||gender==null||gender==undefined){
  valid = false
  document.getElementById("ugender").innerHTML="Gender required feild"
  document.getElementById("gender").setAttribute('required','required');
 }
 else
 {
  document.getElementById("ugender").innerHTML=""
 }


 if (country==''||country==null||country==undefined) {
  valid = false 
   document.getElementById("ucountry").innerHTML="country is required feild"
  document.getElementById("country").setAttribute('required','required');
 }
 else{
  document.getElementById("ucountry").innerHTML=""
 }

   var text=document.getElementById("text");
   if (checkBox.checked==true) {
    text.style.display = "none";
    }else{
       valid = false
      text.style.display="block";
     }
   
   if (valid){
    alert("form submitted succesfully");
      setTimeout(function(){
     location.reload()
     },2000)
    }
   }

  
