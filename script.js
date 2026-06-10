// =====================================
// FADE-IN ANIMATION
// =====================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".card").forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});

// =====================================
// CARD PARALLAX EFFECT
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;

  });

});

// =====================================
// SPOTLIGHT EFFECT
// =====================================

document.addEventListener("mousemove", (e) => {

  const spotlight = document.querySelector(".spotlight");

  if (!spotlight) return;

  spotlight.style.left = e.clientX + "px";
  spotlight.style.top = e.clientY + "px";

});

// =====================================
// HERO TYPEWRITER
// =====================================

const phrases = [
  "Flutter Developer",
  "Backend Builder",
  "Laravel Learner",
  "AI Explorer"
];

let phraseIndex = 0;
let charIndex = 0;

const typingTarget = document.querySelector(".hero-tag");

function typeText() {

  if (!typingTarget) return;

  let currentPhrase = phrases[phraseIndex];

  if (charIndex < currentPhrase.length) {

    typingTarget.textContent += currentPhrase.charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 70);

  } else {

    setTimeout(() => {

      typingTarget.textContent = "";

      charIndex = 0;

      phraseIndex++;

      if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
      }

      typeText();

    }, 2000);

  }

}

typingTarget.textContent = "";
typeText();

// =====================================
// COUNTER ANIMATION
// =====================================

const counters = document.querySelectorAll(".stats-card h2");

counters.forEach(counter => {

  const target =
    parseInt(counter.innerText.replace("+", ""));

  let current = 0;

  const updateCounter = () => {

    const increment = target / 40;

    if (current < target) {

      current += increment;

      counter.innerText =
        Math.ceil(current) + "+";

      requestAnimationFrame(updateCounter);

    } else {

      counter.innerText = target + "+";

    }

  };

  updateCounter();

});

// =====================================
// SMOOTH NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target =
      document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});