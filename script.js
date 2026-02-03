// PAGE NAVIGATION
function nextPage(showId) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  // show selected
  document.getElementById(showId).classList.remove('hidden');

  // Start music only on main page
  if(showId === 'mainPage'){
    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play().catch(()=>{});
  }
}

// GIFT
function openGift() {
  fireCrackers();
}

// CAKE
function blowCandle() {
  fireCrackers();
  document.querySelector('.credits').classList.remove('hidden');
}

// FIREWORK BURST
function fireCrackers(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  for (let i = 0; i < 30; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    document.body.appendChild(spark);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;

    spark.style.left = x + "px";
    spark.style.top = y + "px";

    spark.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${Math.cos(angle) * distance}px,
                  ${Math.sin(angle) * distance}px)`, opacity: 0 }
    ], { duration: 900, easing: "ease-out" });

    setTimeout(() => spark.remove(), 900);
  }
}

// HEARTS FLOATING
setInterval(createHeart, 800);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";
  heart.style.fontSize = (12 + Math.random() * 14) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}
