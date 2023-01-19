
const inputName = document.getElementById('name')
const inputNumber = document.getElementById('number');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const inputCvc = document.getElementById('cvc');
const firstStage = document.getElementById("first-stage");
const secondStage=document.getElementById('second-stage')



inputName.onkeyup = function () {
    document.getElementById('valueName').innerHTML = inputName.value;
};

inputNumber.onkeyup = function () {
    document.getElementById('valueNumber').innerHTML = inputNumber.value.match(/.{1,4}/g).join(' ');

};

inputMonth.onkeyup = function () {
    document.getElementById('valueMonth').innerHTML = inputMonth.value;
};

inputYear.onkeyup = function () {
    document.getElementById('valueYear').innerHTML = inputYear.value;
};

inputCvc.onkeyup = function () {
    document.getElementById('valueCvc').innerHTML = inputCvc.value;
};


document.getElementsByClassName("input-cvc")[0].addEventListener("input", cvc);
class cvc {
    constructor() {
        this.value = this.value.replace(/[^\d]/, '');

    }
}

document.getElementsByClassName("input-year")[0].addEventListener("input", year);
class year {
    constructor() {
        this.value = this.value.replace(/[^\d]/, '');
    }
}

document.getElementsByClassName("input-month")[0].addEventListener("input", month);
class month {
    constructor() {
        this.value = this.value.replace(/[^\d]/, '');

    }
}

function myFunction() {
     firstStage.style.display="none"
   secondStage.style.display="flex"
}