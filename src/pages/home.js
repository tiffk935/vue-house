import gsap from 'gsap';

let totalCount = 0;
let completedCount = 0;
let loadingFinished = false;
const completedResources = new WeakSet();
const RESOURCE_TIMEOUT = 12000;

function updateProgress(resource) {
  // A resource may fire more than one event, or race its timeout.
  if (completedResources.has(resource)) return;
  completedResources.add(resource);
  completedCount++;

  const percent = Math.round((completedCount / totalCount) * 100);
  document.querySelector('#pct').innerText = percent + '%';
  gsap.to('#bar', { width: `${percent}%`, ease: 'none', duration: 0.2 });

  if (completedCount >= totalCount) {
    finishLoading();
  }
}

function finishLoading() {
  if (loadingFinished) return;
  loadingFinished = true;

  document.querySelector('#pct').innerText = '100%';
  gsap.to('#bar', { width: '100%', ease: 'none', duration: 0.2 });

  setTimeout(() => {
    gsap.to('#loading', {
      opacity: 0,
      duration: 0.3,
      delay: 1,
      onComplete: () => {
        gsap.set('#loading', { display: 'none' });
      }
    });
  }, 400);
}

const images = [...document.querySelectorAll('main img')];
const videos = [...document.querySelectorAll('main video')];
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const videosToLoad = videos.filter(video => {
  if (!video.classList.contains('pc-video') && !video.classList.contains('mob-video')) {
    return true;
  }
  return isMobile
    ? video.classList.contains('mob-video')
    : video.classList.contains('pc-video');
});

totalCount = images.length + videosToLoad.length;

if (totalCount === 0) {
  finishLoading();
}

images.forEach(img => {
  const image = new Image();
  const complete = () => updateProgress(image);

  image.onload = complete;
  image.onerror = complete;
  setTimeout(complete, RESOURCE_TIMEOUT);
  image.src = img.currentSrc || img.src;
});

videosToLoad.forEach(video => {
  const complete = () => updateProgress(video);

  video.addEventListener('loadeddata', complete, { once: true });
  video.addEventListener('error', complete, { once: true });

  // The event may have fired before this module registered its listeners.
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    complete();
  } else {
    setTimeout(complete, RESOURCE_TIMEOUT);
  }
});
