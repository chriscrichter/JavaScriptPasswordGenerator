	// JavaScript Password Generator

	// Variables containing characters
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';

function passwordCreate() {

    // Prompt and variable for password length
    var passLength = prompt("Please enter a password length between 8 and 128 Characters:");

    // Verify that password length meets requirements
    if (passLength >= 8 && passLength <= 128) {
        var cleanPasswordLength = parseInt(passLength);
    	// var cleanPasswordLength;
    
    // Prompts and variables for character types
    var upperConf = confirm("Should password contain uppercase letters?");
    var lowerConf = confirm("Should password contain lowercase letters?");
    var numbersConf = confirm("Should password contain numbers?");
    var specialConf = confirm("Should password contain special characters?");

    // upperCase lowerCase numbers special selected
    if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && lowerConf && numbersConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + lowerCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                console.log(passwordClean)
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

    // upperCase lowerCase numbers selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && lowerConf && numbersConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + lowerCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

    // upperCase lowerCase special selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && lowerConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + lowerCase + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

    // upperCase numbers special selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && numbersConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

    // lowerCase numbers special selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && lowerConf && numbersConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = lowerCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

    // upperCase lowerCase selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && lowerConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + lowerCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // upperCase numbers selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && numbersConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // upperCase special selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // upperCase numbers selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && lowerConf && numbersConf) {
        function create(length = cleanPasswordLength){
            var all = lowerCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // lowerCase special selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && lowerConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = lowerCase + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // numbers special selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && numbersConf && specialConf) {
        function create(length = cleanPasswordLength){
            var all = numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, '9');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // upperCase only selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && upperConf) {
        function create(length = cleanPasswordLength){
            var all = upperCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'Z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // lowerCase only selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && lowerConf) {
        function create(length = cleanPasswordLength){
            var all = lowerCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, 'z');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // numbers only selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && numbersConf) {
        function create(length = cleanPasswordLength){
            var all = numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, '9');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
    }

   // special only selected
    else if (cleanPasswordLength >= 8 && cleanPasswordLength <= 128 && specialConf) {
        function create(length = cleanPasswordLength){
            var all = special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character)];
                }
                passwordClean = password.replace(/undefined/g, '#');
                document.getElementById("passwordOutput").innerHTML = passwordClean;
            return passwordClean;
        }
        create(cleanPasswordLength);
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