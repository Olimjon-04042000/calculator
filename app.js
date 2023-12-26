const inputText = document.querySelector('input[type="text"]');
const btnsNumber = document.querySelectorAll('.number');
const equal = document.getElementById('equal');
const resetBtn = document.getElementById('resetBtn');
const del = document.getElementById('del');
const dot = document.getElementById('dot');
const zero = document.getElementsByClassName('zero');
const btnsNumberArray = Array.from(btnsNumber);
const arifmetic = document.querySelectorAll('.arifmetic');
const arifmeticArray = Array.from(arifmetic);


btnsNumberArray.forEach(btnNumber => {

    btnNumber.addEventListener("click", function() {
        inputText.value += btnNumber.value;
    });
});

arifmeticArray.forEach(arif => {
    arif.addEventListener("click", function() {
        if (inputText.value.slice(-1) != "+" && inputText.value.slice(-1) != "-" && inputText.value.slice(-1) != "/" && inputText.value.slice(-1) != "*") {
            inputText.value += arif.value;
        }

    })
})

equal.addEventListener('click', function() {
    const inputValue = inputText.value;
    try {
        const result = eval(inputValue);

        inputText.value = result;
    } catch (error) {
        console.log("Noto'g'ri amalni kiritdingiz");

    }
});

resetBtn.addEventListener('click', function() {
    inputText.value = "";
})


del.addEventListener('click', function() {
    const inputValue = inputText.value;

    if (inputValue.length > 0) {
        inputText.value = inputValue.slice(0, -1);
    }
});
dot.addEventListener('click', function() {
    if (inputText.value && inputText.value.slice(-1) != dot.value) {
        inputText.value += dot.value;
        console.log('1');

    } else if (!inputText.value) {
        inputText.value = '0.';
    }
});