const $input = document.querySelector('input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; //1~9까지의 배열
for (let n = 0; n < 10; n += 1) {
    numbers.push(n);
}
const answer = [];
for (let n = 0; n < 4; n += 1) { // 네 번 반복
    const index = Math.floor(Math.random() * numbers.length); //0~8 정수
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
    if (input.length !== 4) { //길이는 4가 아닌가
        return alert('4자리 숫자를 입력해 주세요.');
    }
    if (new Set(input).size !== 4) { //중복된 숫자가 있는가
        return alert('중복되지 않게 입력해 주세요.');
    }
    if (tries.includes(input)) { //이미 시도한 값은 아닌가
        return alert('이미 시도한 값입니다.');
    }
    return true;
} //검사하는 코드

$form.addEventListener('submit', (event) => {
    event.preventDefault(); //기본동작 막기
    const value = $input.value;
    $input.value = '';
    //입력값 문제있음
    if (!checkInput(value)) {
        return;
    }
    //입력값 문제없음
    if (answer.join('') === value) {
        $logs.textContent = '홈런!'
        tries.push(value);
        return;
    }
    if (tries.length >= 9) {
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        $logs.append(message);
        return;
    }
    //몇 스트라이크 몇 볼인지 검사
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        if (index > -1) { //일치하는 숫자 발견
            if (index === i) { //자릿수도 같음
                strike += 1;
            } else { //숫자만 같음
                ball += 1;
            }
        }
    }
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    tries.push(value);
});