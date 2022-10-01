const playVideoBtn = document.querySelector(".play-button");
const video = document.querySelector(".video-block");

function onClickTogglePlayVideoState() {
    if (video.paused || video.ended) {
        video.play();

        playVideoBtn.classList.add("opacity-0");
        playVideoBtn.classList.remove("hover:opacity-75");
    } else {
        video.pause();
    }
}

function onMouseenterShowPlayButton() {
    if(!video.paused || !video.ended) {
        playVideoBtn.classList.remove("opacity-0")
        playVideoBtn.classList.add("hover:opacity-75");
    }
}

function onMouseleaveHidePlayButton() {
    if(!video.paused || video.ended) {
        playVideoBtn.classList.add("opacity-0")
    }
}

playVideoBtn.addEventListener("click", onClickTogglePlayVideoState);
playVideoBtn.addEventListener("mouseenter", onMouseenterShowPlayButton);
playVideoBtn.addEventListener("mouseleave", onMouseleaveHidePlayButton);
video.addEventListener("mouseenter", onMouseenterShowPlayButton);
video.addEventListener("mouseleave", onMouseleaveHidePlayButton);