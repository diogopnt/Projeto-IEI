$(document).ready(function () {
    $("#myGraph").highcharts({
        chart: { type: "pie" },
        title: { text: "Indústria Automóvel Japonesa" },
        series: [
            {
                name: "Contribuição (%)",
                data: [
                    { name: "Fábio Simões", y: 50 },
                    { name: "Diogo Pinto", y: 50 },
                ]
            },
        ]
    });
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
    $("#line-progress").css("width", "25%");
    $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
    $("#line-progress").css("width", "50%");
    $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
    $("#line-progress").css("width", "75%");
    $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active").siblings().removeClass("active");
});


// Create a video element
const video = document.createElement('video');
video.controls = true;
video.width = 600;
video.height = 300;


const sourceMP4 = document.createElement('source');
sourceMP4.src = 'video/90Drift.mp4';
sourceMP4.type = 'video/mp4';


video.appendChild(sourceMP4);


const videoContainer = document.getElementById('videoContainer');
videoContainer.appendChild(video);


//Zoom out and in Images


function zoomIn(element) {
    element.style.width = '400px';
}


function zoomOut(element) {
    element.style.width = '300px';
}
