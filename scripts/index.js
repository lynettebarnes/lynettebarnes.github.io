$(document).ready(function () {
    setInterval(setBackgroundImage, 8000);
});

function setBackgroundImage() {
    var body = $('body.index');
    var imgUrl = body.css('background-image').split('_')[0];
    var imgNo = body.css('background-image').split('_')[1];

    body.css('background-image', imgUrl + '_' + getImageNumber(imgNo));
}

function getImageNumber(fileNo) {
    switch (fileNo) {
        case ('0.jpg")'):
            return '1.jpg")';
        case ('1.jpg")'):
            return '2.jpg")';
        case ('2.jpg")'):
            return '3.jpg")';
        case ('3.jpg")'):
            return '4.jpg")';
        case ('4.jpg")'):
            return '5.jpg")';
        case ('5.jpg")'):
            return '6.jpg")';
        case ('6.jpg")'):
            return '7.jpg")';
        case ('7.jpg")'):
            return '8.jpg")';
        case ('8.jpg")'):
            return '9.jpg")';
        case ('9.jpg")'):
            return '0.jpg")';
        default:
            return '0.jpg")';
    }
}