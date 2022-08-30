const video = document.getElementById("video")
const panel = document.querySelector(".panel")
const soundButton = document.querySelector(".soundButton")
video.addEventListener("ended", function triggerAnimation() {
  console.log("video has ended")
  panel.classList.add("vanish")
})
soundButton.addEventListener("click", function MuteVideo() {
  if (video.muted === false) {
    soundButton.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    video.muted = true
  } else if (video.muted === true) {
    soundButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    video.muted = false
  }
})
