let jDemo= $('#test'); 
let jName ='Anis';
let jAge =30;
jDemo.html(`Hello I am ${jName} I am ${jName} Yesrs Old`);
// jDemo.html('Hello I am ' + jName+ 'I am '+ jName+' Years Old');
jDemo.html("<b>Hello i am ANis <b>")

jDemo.css('color','red')

let img = $('#image')
let btn2 = $('#btn2')

btn2.click(function(){
    img.attr('src', './assets/images/index.png').fadeIn( "slow" );
})

let btn4=$('#btn')
btn4.click(function() {
    $('#testDiv').fadeToggle(3000);
})
