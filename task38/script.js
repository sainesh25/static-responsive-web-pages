const greetings = document.getElementById('greetings');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

greetings.addEventListener('click', function(){

});
btn1.addEventListener('click', function(){
    greetings.innerText = 'Namaskar';
});
btn2.addEventListener('click', function(){
    greetings.innerText = 'Namaste';
});
btn3.addEventListener('click', function(){
    greetings.innerText = 'Ciao';
});
btn4.addEventListener('click', function(){
    greetings.innerText = 'Salut';
});

