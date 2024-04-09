const email = document.getElementById('email');
const dername = document.getElementById('name');
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
        To : email.value,
        From : "cabelcraft.shop@gmail.com",
        Subject : "Ihr Einkauf bei CabelCraft",
        Body :"Hallo " + dername.value + ", <br>"  + 
        " vielen für den Einkauf bei uns,da es sich nur um ein Schulprojekt handelt wird das Produkt nicht eintreffen. <br>" + "*Bitte antworten sie nicht auf diese Nachricht*"
    }).then(
      message =>{
        if(message === "OK"){
            alert("Vielen Dank für die Bestellung!Eine E-mail wurde gesendet an " + email.value +" Überpfrüfen sie auch den Spamordner.")
        }


      }
      
    );
})