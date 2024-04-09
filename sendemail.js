function sendOTP(){
    const email = document.getElementById('email');
    const otperverify= document.getElementsByClassName('optverify')[0]
}

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "Kaufbestätigung",
    Body : "Vielen Dank für den Einkauf,das Produkt wir nie eintreffen *Bitte antworten sie nicht auf die E-mail*"
}).then(
  message => alert(message)
);