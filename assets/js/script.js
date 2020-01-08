	// JavaScript Password Generator

	// Variables containing characters
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';

function passwordCreate() {

    // Prompts and variables
    var passLength = prompt("Please enter a password length between 8 and 128 Characters:");

    // Verify that password length meets requirements
    if (passLength >= 8 && passLength <= 128) {
        var newPasswordLength = parseInt(passLength);

    var newPasswordLength;
    
    var upperConf = confirm("Should password contain uppercase letters?");
    var lowerConf = confirm("Should password contain lowercase letters?");
    var numbersConf = confirm("Should password contain numbers?");
    var specialConf = confirm("Should password contain special characters?");

    // upperCase lowerCase numbers special selected
    if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf && numbersConf && specialConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

    // upperCase lowerCase numbers selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf && numbersConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

    // upperCase lowerCase special selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf && specialConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

    // upperCase numbers special selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && numbersConf && specialConf) {
        function create(length = newPasswordLength){
            var all = upperCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

    // lowerCase numbers special selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf && numbersConf && specialConf) {
        function create(length = newPasswordLength){
            var all = lowerCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

    // upperCase lowerCase selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // upperCase numbers selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && numbersConf) {
        function create(length = newPasswordLength){
            var all = upperCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // upperCase special selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && specialConf) {
        function create(length = newPasswordLength){
            var all = upperCase + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // upperCase numbers selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf && numbersConf) {
        function create(length = newPasswordLength){
            var all = lowerCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // lowerCase special selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf && specialConf) {
        function create(length = newPasswordLength){
            var all = lowerCase + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // numbers special selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && numbersConf && specialConf) {
        function create(length = newPasswordLength){
            var all = numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, '9');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // upperCase only selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf) {
        function create(length = newPasswordLength){
            var all = upperCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // lowerCase only selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf) {
        function create(length = newPasswordLength){
            var all = lowerCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // numbers only selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && numbersConf) {
        function create(length = newPasswordLength){
            var all = numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, '9');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

   // special only selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && specialConf) {
        function create(length = newPasswordLength){
            var all = special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                passwordClean = password.replace(/undefined/g, '#');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(newPasswordLength);
    }

    else {
        alert("Please select 'at least' one choice from uppercase letters, lowercase letters, numbers or special characters.");
    }

    }
    else {
        alert("Please enter a password length between 8 and 128.");
    }
}

function copyClipboard() {
    var copyText = document.getElementById("passwordOutput");
    var text = copyText.textContent;
    if (text.length > 0) {
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Your password has been copied to the clipboard.\r\nDon't share it with anyone!");
    }
  }