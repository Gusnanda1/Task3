function SubmitData() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    let link = document.createElement('a')

    link.href = `mailto:${email}?subject=${subject}&body=Halo nama saya ${name}, ${message}, silahkan kontak nomer di ${phone}`


    if (name == '') {
        return alert("Mohon mengisi kolom name")
    }
    else if (email == '') {
        return alert("Mohon mengisi kolom email")
    }
    else if (phone == '') {
        return alert("Mohon mengisi kolom phone number")
    }
    else if (subject == '') {
        return alert("Mohon mengisi kolom subject")
    }
    else if (message == '') {
        return alert("Mohon mengisi kolom message")
    }
    else {
        link.click()
    }

}


