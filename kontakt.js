const email = document.getElementById('email');
const dername = document.getElementById('name');
const betreff = document.getElementById('betreff');
const nachricht = document.getElementById('nachricht');
const submit = document.getElementsByClassName('form-b')[0];
//Add event listener
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked " + email.value);

    //Email Code Here...
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "cabelcraft.shop@gmail.com",
        Password : "4E81D47C55CC3C87C312B583A9D76EDB6CC3",
        To : "cabelcraft.shop@gmail.com",
        From : "cabelcraft.shop@gmail.com",
        Subject : betreff.value,
        Body :  " Dir wurde folgende Nachricht übermittelt: <br>" +nachricht.value +"<br> von " +email.value
    }).then(
      message =>{
        if(message === "OK"){
            alert("Wir werden uns ihr Feedback bald ansehen ")
        }


      }
      
    );
})