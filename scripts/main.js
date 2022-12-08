console.log($(' .order__form .input '));

const validateForm = (e) => {
    e.preventDefault();

    let inputs = $(' .order__form .input ');

    resetErrors(inputs);

    inputs.each(function () {
        let input = $(this);

        if (input.val().trim().length === 0) {
            showError(input);
        }
    })
}

function showError(input) {
    let inputError = input.next();
    inputError.removeClass('hidden');
    input.addClass('input__border-error');
}

function resetErrors(inputs) {
    inputs.each(function () {
        let input = $(this),
            inputError = input.next();
        input.removeClass('input__border-error');
        inputError.addClass('hidden');
    })
}

$(document).ready(() => {
    $('.order__form').submit(validateForm);
})
