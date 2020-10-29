function goInteractive() {

    let form = document.getElementById('phone-number');
    let phone = form.value;
    let submitButton = document.getElementById('submit-button');
    let checkbox = document.getElementById('web-version');
    let useWebVersion = false;

    form.addEventListener('input', (e) => {
        e.preventDefault();
        form.value.length === 11 ? form.classList.remove('hasError') : '';
        !form.value.match(/7\D+/g) && form.value.length <= 11 ?
            phone = form.value : form.value = phone;
        submitButton.disabled = phone.length < 11;
    });

    form.addEventListener('blur', (e) => {
        e.preventDefault();
        form.placeholder = '7XXXXXXXXXX';
        form.value.length < 11 ? form.classList.add('hasError') : form.classList.remove('hasError');
    });

    form.addEventListener('focus', (e) => {
        e.preventDefault();
        form.placeholder = ''
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.location.href = `http://${checkbox.checked ? 'web' : 'api'}.whatsapp.com/send?phone=${phone}`
    });

}

goInteractive();
