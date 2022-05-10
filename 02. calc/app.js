let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event)=> {
    if (!operator) { //비어있다
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    //비어있지 않다
    if (!numTwo) {
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
}
document.querySelector('#num0').addEventListener('click', onClickNumber);
document.querySelector('#num1').addEventListener('click', onClickNumber);
document.querySelector('#num2').addEventListener('click', onClickNumber);
document.querySelector('#num3').addEventListener('click', onClickNumber);
document.querySelector('#num4').addEventListener('click', onClickNumber);
document.querySelector('#num5').addEventListener('click', onClickNumber);
document.querySelector('#num6').addEventListener('click', onClickNumber);
document.querySelector('#num7').addEventListener('click', onClickNumber);
document.querySelector('#num8').addEventListener('click', onClickNumber);
document.querySelector('#num9').addEventListener('click', onClickNumber);

const onclickOperator = (op) => () => {
    if(numOne) {
        operator = op
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
}
document.querySelector('#plus').addEventListener('click', onclickOperator('+'));
document.querySelector('#minus').addEventListener('click', onclickOperator('-'));
document.querySelector('#multiply').addEventListener('click', onclickOperator('*'));
document.querySelector('#divide').addEventListener('click', onclickOperator('/'));

document.querySelector('#calculate').addEventListener('click', () => {
    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = numOne - numTwo;
                break;
            case '*':
                $result.value = numOne * numTwo;
                break;
            case '/':
                $result.value = numOne / numTwo;
                break;
            default:
                break; 
        }
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
});
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = '';
    $result.value = '';
});