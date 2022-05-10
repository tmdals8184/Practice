const number = parseInt(prompt('몇 명이 참가하나요?'));
const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');
let word;
let newWord;

const onInput = (event) => {
    newWord = event.target.value;
};
const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0]) { //제시어가 비거나 올바른 단어인가?
        //비어 있다.
        word = newWord; //입력한 단어가 제시어가 된다.
        $word.textContent = word;
        const order = parseInt($order.textContent); //현재순서
        if (order + 1 > number) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
    } else {
        alert('올바르지 않은 단어입니다.');
        word = '';
        $order.textContent = 1;
        $word.textContent = word;
    }
    $input.value = '';
    $input.focus();
};

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickButton);