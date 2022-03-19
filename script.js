let carNumber = document.querySelector('.car-number-output');
let slider = document.getElementById('car-number');
let models = document.querySelectorAll('.model');
let secret = document.querySelector('.car-selector span')

function g(x = true) {
    if(x === true) {
        carNumber.value = slider.value;
    }
    else {
        carNumber.value = 4;
    }
    
    for (let model of models) {
        if (model.classList.contains('model-' + carNumber.value)) {
            if (!model.classList.contains('visible')) {
                model.classList.add('visible');
            }
        }
        else {
            model.classList.remove('visible');
        }
    }
}

slider.oninput = function() {
    g();
};

secret.onclick = function () {
    g(false);
};
