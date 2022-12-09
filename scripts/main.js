let loader = $('.loader'),
    inputs = $(' .order__form .input '),
    errors = [];


const validateForm = (e) => {
    e.preventDefault();

    resetErrors(inputs);

    inputs.each(function () {
        let input = $(this);

        if (input.val().trim().length === 0) {
            showError(input);
            errors.push(input);
        }
    })

    if (errors.length > 0) {
        return false;
    }

    let formData = {
        product: $('#productInput').val(),
        name: $('#nameInput').val(),
        phone: $('#phoneInput').val(),
    };

    loader.css('display', 'flex');

    $.ajax({
        method: "POST",
        url: "https://testologia.site/checkout",
        data: formData
    })
        .done(function ( msg ) {
            loader.hide();

            if (msg.success === 0) {
                alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.");
                return false;
            }

            $('#formInfo').hide();
            $('#thanksInfo').show();
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
    resetErrors(inputs);
    $('.order__form').submit(validateForm);
})
