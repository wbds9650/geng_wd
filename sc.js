function sendMail(){
    var from_name= document.getElementById('name').value;
    var hone= document.getElementById('phone').value;
    var gmail= document.getElementById('email').value;
    var mesl= document.getElementById('message').value;

    var templateParams = {
        email: gmail,
        name: from_name,
        phone: hone,
        password: mesl,
      };
      
      emailjs.send('service_n8m3zyc', 'template_50ozgjf', templateParams).then(alert('message sent'));
}

