function validateForm() {
  var username = document.getElementById('username').value;
  var age = document.getElementById('age').value;
  var pincode = document.getElementById('pincode').value;
  var pan = document.getElementById('pan').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;

  var isValid = true;

  // Username validation
  if (username.length < 8 || username.length > 10) {
    document.getElementById('usernameError').textContent = "Username must be between 8 and 10 characters";
    isValid = false;
  } else {
    document.getElementById('usernameError').textContent = "";
  }

  // Age validation
  if (age<0||age < 1 || age > 100 || isNaN(age)) {
  document.getElementById('ageError').textContent = "Age must be between 1 and 100.";
  isValid = false;
} else {
  document.getElementById('ageError').textContent = "";
}

  // Pincode validation
  if (!/^\d{6}$/.test(pincode)) {
    document.getElementById('pincodeError').textContent = "Pincode must be 6 digits";
    isValid = false;
  } else {
    document.getElementById('pincodeError').textContent = "";
  }

  // PAN number validation
  if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
    document.getElementById('panError').textContent = "PAN number must be 10 characters alphanumeric";
    isValid = false;
  } else {
    document.getElementById('panError').textContent = "";
  }

  // Password validation
  if (!/(?=.[A-Z])(?=.[!@#$%^&])(?=.[0-9]).{10}/.test(password)) {
    document.getElementById('passwordError').textContent = "Password must have 1 uppercase, 1 special character, 1 digit, and be 10 characters long";
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = "";
  }

  // Phone number validation
  if (!/^8\d{9}$/.test(phone)) {
    document.getElementById('phoneError').textContent = "Phone number must start with 8 and be 10 digits long";
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = "";
  }

  return isValid;
}