let test = document.getElementById('test');
test.innerHTML='hello';

let testClass=document.getElementsByClassName('test')

for (let i = 0; i < testClass.length; i++) {
    testClass[i].innerHTML="I am From Loop"
}

// id. tag, class, attribute

let pixel = document.querySelector('.test')
let pixelAll = document.querySelectorAll('.test')
console.log(pixelAll);


let btn = document.getElementById('btn')
btn.addEventListener('mouseover', function() {
        test.innerHTML='I am From Event'
        test.style.color='red'
})
btn.addEventListener('mouseout', function() {
        test.innerHTML='Hey I am Mouse Out'
        test.style.color='blue'
        test.style.backgroundColor='red'
})