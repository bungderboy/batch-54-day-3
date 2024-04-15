function submitHandler(){
    // menangkap inputan yang ada di html
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // pengkondisian
    if (name == ""){
       return alert("Please Enter Your Name")
    } else if (email == ""){
        return alert("Please enter Your Email")
    } else if (phone == ""){
        return alert("Please enter Your Phone Number")
    } else if (subject == "Select"){
        return alert("Please Choose Your Subject")
    } else if (message == ""){
        return alert("Please enter Your Message")
    }

    // menangkap isi inputan yang akan ditampung ke data
    const data = {
        name, email, phone, subject, message
    }

    // alamat email yg dituju
    const yourEmail = 'muhammadderbyrivaldi@gmail.com'

    // manipulasi DOM untuk ngirim email
    let a = document.createElement('a');
    a.href = `http://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${message}`
    a.click();
    
    console.log(data)

}

