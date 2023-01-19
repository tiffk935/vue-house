


window.addEventListener("load", function () {
    hideAll(),
      inViewCheck(),
      window.addEventListener("scroll", function () {
        inViewCheck(), scrollBtnVisible(), stickyNavToggle();
      });
    var e = document.getElementById("page-loading-blocs-notifaction");
    e && e.classList.add("preloader-complete");
  })


 



 