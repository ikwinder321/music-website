function validateForm() {
    const email = document.forms["form"]["email"].value;
    const str = document.forms["form"]["pass"].value;
    const name = document.forms["form"]["name"].value;

    if (email === "" || str === "") {
        alert('Please fill all the fields');
        return false;
    }

    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailRegex.test(email) === false) {
        alert('Email address is not correct');
        return false;
    }


    if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >= 8 && emailRegex.test(email)) {
        alert('You have successfully signed in!');
        return true;
    } else {
        alert('Password is not correct');
        return false;
    }


}

function alertIt() {
    let ans = confirm("Do you want to purchase this subscription?")

    if (ans) alert('Your purchase is successful you can proceed to home page!');
    else alert('Your purchase has been declined!');
}

function validateNewsLetter() {
    let email = document.getElementById("email").value;

    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailRegex.test(email) === false) {
        alert('Email address is not correct');
        return false;
    }

    alert('You have been successfully subscribed to our newsletter')
}

function validateForm2() {
    const fname = document.forms["form"]["fname"].value;
    const lname = document.forms["form"]["lname"].value;
    const email = document.forms["form"]["email"].value;
    const mobile = document.forms["form"]["mobile"].value;
    const message = document.forms["form"]["message"].value;

    if (fname === "" || lname === "" || email === "" || mobile === "" || message === "") {
        alert('Please fill all the fields');
        return false;
    }

    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailRegex.test(email) === false) {
        alert('Email address is not correct');
        return false;
    }

    const phoneNoRegex = /^\d{10}$/;

    if (!phoneNoRegex.test(mobile)) {
        alert('Please fill correct mobile number');
        return false;
    }


    alert('We have taken your query... Thanks');
    return true;
}