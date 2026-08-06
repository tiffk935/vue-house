import gsap from 'gsap';

let totalCount = 0;
let completedCount = 0;
const resourceUrls = [];

function updateProgress() {
  completedCount++;
  const percent = Math.round((completedCount / totalCount) * 100);
  
  document.querySelector('#pct').innerText = percent + '%';
  gsap.to('#bar', { width: `${percent}%`, ease: 'none', duration: 0.2 });

  if (completedCount === totalCount) {
    finishLoading();
  }
}

function finishLoading() {
  document.querySelector('#pct').innerText = '100%';
  gsap.to('#bar', { width: '100%', ease: 'none', duration: 0.2 });

  setTimeout(() => {
    gsap.to('#loading', {
      opacity: 0,
      direction: 0.3,
      delay: 1,
      onComplete: () => {
        gsap.set('#loading', {
          display: 'none'
        });
      }
    })
  }, 400);
}

totalCount = document.querySelectorAll('main img').length + document.querySelectorAll('main video').length;

document.querySelectorAll('main img').forEach(img => {
  const image = new Image();

  image.onload = () => {
    updateProgress();
  };

  image.onerror = () => {
    updateProgress();
  };

  image.src = img.src;
});

document.querySelectorAll('main video').forEach(video => {
  video.addEventListener('loadeddata', () => {
    updateProgress();
  });

  video.addEventListener("error", () => {
    updateProgress();
  });
});