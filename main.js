
window.onload = function() {

    draw();
    register();

};

function draw(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.font = '48px serif';
    ctx.fillText('Hello world', 10, 50);

}

function register(){
    var memeText1 = document.getElementById('text1');

    memeText1.addEventListener("keyup", function(){
    console.log(memeText1.value);
}); 
}

// function useText(str){
//     // alert('TextChanged');
//     console.log(str);
// }