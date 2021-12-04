const copyMockedBtn = document.getElementById("copy-mocked-btn");
const toMockInput = document.getElementById("to-mock-input");
const mockedOutput = document.getElementById("mocked-output");
const copiedNotif = document.getElementById("copied-notif");
const closeNotifBtn = document.getElementById("close-notif");

function mock(str) {
    str = str.trim();
    let x = '';
    for (let i = 0; i < str.length; ++i) {
        if (str[i] == ' ') {
            x += ' ';
        }
        else {
            if (i % 2 == 0) {
                x += str[i].toUpperCase();
            }
            else {
                x += str[i];
            }
        }
    }
    return x;
}

function removeNotif(el) {
    if (el.classList.contains("active")) {
        el.classList.remove("active");
    }
}

toMockInput.addEventListener("input", (e) => {
    mockedOutput.innerText = mock(e.target.value);
});

copyMockedBtn.addEventListener("click", () => {
    if (!toMockInput.value) {
        alert("Empty field");
    } else {
        navigator.clipboard.writeText(mockedOutput.value);
        copiedNotif.classList.add("active");
        setTimeout(
            () => {
                removeNotif(copiedNotif);
            },
            4000
        );
    }
});

closeNotifBtn.addEventListener("click", () => {
    removeNotif(copiedNotif);
})
