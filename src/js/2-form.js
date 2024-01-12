const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';
let inputTarget = form.elements;
const localStorageValue = {
    email: null,
    message: null
};

/* fill the local storage key "localStorageKey"  */
form.addEventListener('input', () => {
    localStorageValue.email = inputTarget.email.value.trim();
    localStorageValue.message = inputTarget.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
});

/* fill the input fields if the local storage isn't empty */
function checkTheStorage() {
    let savedValues = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedValues != null) {
        inputTarget.email.value = savedValues.email ?? "";
        inputTarget.message.value = savedValues.message ?? "";
    }
}

checkTheStorage();
/* form submiting in case if the inputs aren't empty */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((localStorageValue.email != '' && localStorageValue.message != '')) {
        console.log(localStorageValue);

        localStorage.removeItem(localStorageKey);
        form.reset();
    }
});




