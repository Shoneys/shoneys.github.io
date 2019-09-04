function getsubreddit() {
    var srcUrl = "https://www.reddit.com/r/earthporn.json";
    fetch(srcUrl)
        .then(res => res.json())
        .then(res => res.data.children)
        .then(res =>
            res.map(post => ({
                link: post.data.url
            }))
        )
        .then(res => res.map(render));

    const app = document.querySelector("body");

    const render = post => {
        picturez.push(post.link);
    };
}


var picturez = [];
var imgs = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    setTimeout(function () {
        for (var i = 0; i < picturez.length; i++) {
            imgs[i] =
                loadImage(picturez[i],
                    function (pic) {
                        print(img = pic), redraw();
                    },
                    loadImageErrorOverride);
        }
    }, 3000);
    setInterval(function () {
        image(imgs[randomLength()], randomWidth(), randomHeight(), randomWidth(), randomHeight())
    }, 5000);
}

function draw() {
    ellipse(mouseX, mouseY, 80, 80);
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
}

function randomLength() {
    var min = 0;
    var max = picturez.length;
    return Math.floor(Math.random() * (+max - +min)) + +min;;
}

function randomWidth() {
    var min = 0;
    var max = windowWidth;
    return Math.floor(Math.random() * (+max - +min)) + +min;;
}

function randomHeight() {
    var min = 0;
    var max = windowHeight;
    return Math.floor(Math.random() * (+max - +min)) + +min;;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

getsubreddit();


function loadImageErrorOverride(errEvt) {
    const pic = errEvt.target;

    if (!pic.crossOrigin) return print('Failed to reload ' + pic.src + '!');

    print('Attempting to reload it as a tainted image now...');
    pic.crossOrigin = null, pic.src = pic.src;
}
