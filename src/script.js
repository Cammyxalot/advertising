//query Selector
const video = document.getElementById("video")
const panel = document.querySelector(".panel")
const soundButton = document.querySelector(".soundButton")
const imgLink = document.querySelector(".imgLink")
const footer = document.querySelector(".discoverBtn")
const arrow = document.querySelector(".arrow")

//Main function who trigger animation once the video end
video.addEventListener("ended", function triggerAnimation() {
  // console.log("video has ended")
  panel.classList.add("vanish")
  imgLink.classList.add("transitioned")
  footer.innerHTML = `<p>J'Y VAIS</p>`
  arrow.classList.add("end")
})

//Animation attempt for the arrow like shown in the google drive.
setInterval(togleArrow(), 1000)
function togleArrow() {
  setInterval(() => {
    arrow.classList.toggle("animation")
  }, 500)
}

//button to mute and unmute the video. The video must be mute at the beggining
// else the autoplay won't start.

soundButton.addEventListener("click", function MuteVideo() {
  if (video.muted === false) {
    soundButton.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    video.muted = true
  } else if (video.muted === true) {
    soundButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    video.muted = false
  }
})
