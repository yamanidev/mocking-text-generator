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

function test(){
    let inputField = document.getElementsByTagName('input')[0];
    inputField.value = mock(inputField.value);
    inputField.select();
    document.execCommand('Copy');
    inputField.value = '';
    let copied = document.createElement('h6');
    copied.innerText = 'Copied!';
    document.body.appendChild(copied);
}

