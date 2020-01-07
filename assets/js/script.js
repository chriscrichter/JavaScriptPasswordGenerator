function passwordCreate() {

    // Prompts and variables.
    var passLength = prompt("Please enter a password length between 8 and 128 Characters:");
    // Verify that password length meets requirements and creates an array that is the same length as the user input.
    if (passLength >= 8 && passLength <= 128) {
        var newPasswordLength = parseInt(passLength);
        //var newPasswordLength = passLength;

    var newPasswordLength;
    
    var upperConf = confirm("Should password contain uppercase letters?");
    var lowerConf = confirm("Should password contain lowercase letters?");
    var numbersConf = confirm("Should password contain numbers?");
    var specialConf = confirm("Should password contain special characters?");

    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '123456789';
    var special = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';

    // check to see which confirmations have been selected.

    // 1.) if all options are selected
    if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf && numbersConf && specialConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 2.) if only uppercase, lowercase, & numbers are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf && numbersConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 3.) if only uppercase & lowercase are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf && lowerConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 4.) if only uppercase is selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && upperConf) {
        function create(length = newPasswordLength){
            var all = upperCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }

    // 5.) if only lowercase is selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf) {
        function create(length = newPasswordLength){
            var all = lowerCase;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 6.) if only numbers are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && numbersConf) {
        function create(length = newPasswordLength){
            var all = numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 7.) if only special are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && specialConf) {
        function create(length = newPasswordLength){
            var all = special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }

    // 8.) if only numbers & special are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && numbersConf && specialConf) {
        function create(length = newPasswordLength){
            var all = numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 9.) if only lowercase & numbers are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf && numbersConf) {
        function create(length = newPasswordLength){
            var all = lowerCase + numbers;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }


    // 10.) if only lowercase & numbers are selected
    else if (newPasswordLength >= 8 && newPasswordLength <= 128 && lowerConf && specialConf) {
        function create(length = newPasswordLength){
            var all = upperCase + lowerCase + numbers + special;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        create(newPasswordLength);
    }

    else {
        alert("Please select 'at least' one choice from uppercase letters, lowercase letters, numbers or special characters:");
    }

    }
    else {
        alert("Please enter a password length between 8 and 128.");
    }
}

var passwordDisplayed;
console.log(passwordDisplayed);

function copyClipboard() {
    var copyText = document.getElementById("passwordOutput");
    var text = copyText.textContent;
    if (text.length > 0) {
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Your password has been copied to clipboard.");
    }
  }