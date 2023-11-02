var index = 0;
var images = [];
for (i = 0; i < 5; i++) {
    images[i] = new Image();
    images[i].src = "img/banner" + i + ".jpg";
}

function next() {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }
    var anh = document.getElementById('slideshow');
    anh.src = images[index].src;
}
// function pre(){
//     index--;
//     if(index < 0){
//         index = images.length-1;
//     }
//     var anh = document.getElementById('slideshow');
//         anh.src = images[index].src;
// }
// var a;
// function start(){
//     a = setInterval(next, 1000);
// }
// function stop(){
//     clearInterval(a);
// }
setInterval(next, 3000);