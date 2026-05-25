function scrollToJourney(){
  document
  .getElementById("journey")
  .scrollIntoView({
    behavior:"smooth"
  });
}

const startDate = new Date("November 21, 2025 00:00:00");

function updateTimer(){

  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60))
    / 1000
  );

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer,1000);

updateTimer();

const popup = document.getElementById("popup");

document
.getElementById("openPopup")
.onclick = () => {
  popup.style.display = "flex";
};

document
.getElementById("closePopup")
.onclick = () => {
  popup.style.display = "none";
};

window.onclick = (e) => {
  if(e.target == popup){
    popup.style.display = "none";
  }
};
