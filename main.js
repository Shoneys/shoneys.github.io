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
}

function draw() {
    if (picturez != 'undefined') {
        for (var i = 0; i < picturez.length; i++) {
            imgs[i] = loadImage(picturez[i]);
        }
    }
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

getsubreddit();
