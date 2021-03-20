function mock(str){
    let x = '';
    for (let i = 0; i < str.length; ++i){
        if (str[i] == ' '){
            x += ' ';
        }
        else{
            if (i % 2 == 0){
                x += str[i].toUpperCase();
            }
            else{
                x += str[i];
            }
        }
    }
    return x;
}

function copy(){
    let inputField = document.getElementsByTagName('input')[0];
    if (inputField.value == ''){
        alert('Are you mocking me?');
    }
    else{
        inputField.value = mock(inputField.value);
        inputField.select();
        document.execCommand('Copy');
        inputField.value = '';
        document.getElementsByClassName("copied-notif")[0].style.display = "flex";
    }
}

