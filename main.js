$(document).ready(function () {

    //this var is added in step 9
    // Let's set the AM and PM meridiem for 12 hour format instead of 24 hour time
    var meridiem = "AM"; // Default is AM
    var firstcount = 0;

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        firstcount++;

        if (seconds < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // If the hours digit is less than ten
        if (hours < 10) {
            hours = "0" + hours;
        }

        // Convert from 24 hour to 12 hour format and keep track of the meridiem.
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        // 0 AM and 0 PM should read as 12
        if (hours == 0) {
            hours = 12;
        }


        // This gets a "handle" to the clock div in our HTML
        var clockDiv = document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

        clockPos(seconds);
        if (firstcount < 60) {
            chooseImage(seconds);
        }
        else if (firstcount >= 60) {
            firstcount = 0;
        }
        $("#clock").click(function (e) {
            document.getElementById("nodeContain").outerHTML = "";
        });
    }

    function clockPos(seconds) {
        var clockHeight = (seconds * 1.333333333) + "vh";
        $("#clock").animate({
            marginTop: clockHeight
        });
    }



    /*happy thoughts :)*/
    function chooseImage(seconds) {
        switch (seconds) {
            case '01':
                getfirstsubreddit('LandscapePhotography');
                break;
            case '05':
                getfirstsubreddit('aww');
                break;
            case 10:
                getfirstsubreddit('pics');
                break;
            case 15:
                getfirstsubreddit('india');
                break;
            case 20:
                getfirstsubreddit('earthporn');
                break;
            case 30:
                getfirstsubreddit('Disneyland');
                break;
            case 37:
                getfirstsubreddit('DontPanic');
                break;
            case 42:
                getfirstsubreddit('NintendoSwitch');
                break;
            case 52:
                getfirstsubreddit('PoliticalHumor');
                break;
        }

    }




    function getfirstsubreddit(subredditvar) {
        var srcUrl = 'https://www.reddit.com/r/' + subredditvar + '.json'
        fetch(srcUrl)
            .then(res => res.json())
            .then(res => res.data.children)
            .then(res => res.map(post => ({
                author: post.data.author,
                link: post.data.url,
                img: post.data.thumbnail,
                title: post.data.title
            })))
            .then(res => res.map(render))
            .then(res => console.log(res))

        const app = document.querySelector('body');


        const render = post => {

            const node = document.createElement('div');

            node.innerHTML = `
                    <a id="nodeContain" href="${post.link}" target="_blank">
                        <img src="${post.link}" alt="${post.title}">
                        <div class="top-right">${post.title}</div>
                    </a>`;
            app.appendChild(node);

        }
    }


    setInterval(displayTime, 1000);

    function pageScroll() {
        window.scrollBy(0, 1);
        scrolldelay = setTimeout(pageScroll, 50);
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                $('html, body').animate({
                    scrollTop: 0
                }, 'fast');
            }
        }
    }
    pageScroll();
});
