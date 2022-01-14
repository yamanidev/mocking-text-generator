// Elements

const copyMockedBtn = document.getElementById("copy-mocked-btn");
const toMockInput = document.getElementById("to-mock-input");
const mockedOutput = document.getElementById("mocked-output");
const copiedNotif = document.getElementById("copied-notif");
const closeCopiedNotifBtn = document.getElementById("close-copied-notif");
const errorNotif = document.getElementById("error-notif");
const closeErrorNotifBtn = document.getElementById("close-error-notif");

// Utility functions

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

// Event listeners

toMockInput.addEventListener("input", (e) => {
    mockedOutput.innerText = mock(e.target.value);
});

copyMockedBtn.addEventListener("click", () => {
    if (!toMockInput.value.trim()) {
        // Delete other notification if displayed
        removeNotif(copiedNotif);
        errorNotif.classList.add("active");
        setTimeout(
            () => {
                removeNotif(errorNotif);
            },
            4000
        );
    }
    else {
        navigator.clipboard.writeText(mockedOutput.value);
        // Delete other notification if displayed
        removeNotif(errorNotif);
        copiedNotif.classList.add("active");
        setTimeout(
            () => {
                removeNotif(copiedNotif);
            },
            4000
        );
    }
});

closeCopiedNotifBtn.addEventListener("click", () => {
    removeNotif(copiedNotif);
});

closeErrorNotifBtn.addEventListener("click", () => {
    removeNotif(errorNotif);
});
