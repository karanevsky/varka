const gr = document.querySelector('.gr');
const ml = document.querySelector('.ml');

const ratioValue = document.querySelector('.ra');
const ratioSheet = document.querySelector('.ratio-sheet');
const ratioButton = document.querySelector('.ratio-value');
const ratioList = document.querySelector('.ratio-list');

let scrollValue = 1000;

function checkRatioValue () {
    return document.querySelector('.ratio-list__value:checked').value;
}

function renderMaterial () {
    let selectedValue = checkRatioValue();

    ratioValue.textContent = selectedValue;

    if (scrollValue > 5) {
        gr.textContent = (scrollValue / 100).toFixed(1);
        ml.textContent = Math.round(scrollValue / 100 * selectedValue);
    } else {
        gr.textContent = '↓';
        ml.textContent = '↓';
    }
}

window.onscroll = function () {
    scrollValue = this.scrollY;
    renderMaterial();
}

window.onload = function () {
    this.scrollTo(0, scrollValue);
    renderMaterial();
}

ratioList.addEventListener('click', function () {
    ratioSheet.classList.add('hidden');
    renderMaterial();
})

ratioButton.addEventListener('click', function () {
    ratioSheet.classList.remove('hidden');
})

document.querySelector('.ratio-sheet__overlay').addEventListener('click', function (){
    ratioSheet.classList.add('hidden');
})