function validateName() {
  let x = document.getElementById("name-id").value;

  let text;
  if (x == "") {
    text = "Input not valid";
    document.getElementById("name-validator").innerHTML = text;
    return false; // Return false if validation fails
  } else {
    text = null;
    document.getElementById("name-validator").innerHTML = text;
    return true; // Return true if validation succeeds
  }
}

function validateEmail() {
  let x = document.getElementById("email-id").value;
  let emailMessage;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(x)) {
    emailMessage = "Email not valid";
    document.getElementById("email-validator").innerHTML = emailMessage;
    return false; // Return false if validation fails
  } else {
    emailMessage = null;
    document.getElementById("email-validator").innerHTML = emailMessage;
    return true; // Return true if validation succeeds
  }
}

function validateMessage() {
  let x = document.getElementById("message").value; 
  let text;
  if (x == "") { 
    text = "This field cannot be empty";
    console.log(x);
    document.getElementById("message-validator").innerHTML = text;
    return false;
  } else {
    text = "";
    document.getElementById("message-validator").innerHTML = text;
    return true;
  }
}

// email sendinggg
function sendEmail() {
  // Validate all fields first
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    emailjs.send("service_2la3nhf", "template_e95f1ex", {
        "name": document.getElementById("name-id").value,
        "email-id": document.getElementById("email-id").value,
        "message": document.getElementById("message").value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
      alert("Email successfully sent!");
    }, function(error) {
       console.log('FAILED...', error);
       alert("Failed to send email: " + error);
    });
  } 
  return false;  // To prevent page reload
}