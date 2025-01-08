
const scrollToTopBtn=document.getElementById("gototop");
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
const bannerpanorama=new PANOLENS.ImagePanorama("homeImages/banner.jpeg");
const bannerimage=document.querySelector(".banner");
const bannerimageviewer=new PANOLENS.Viewer({
    container: bannerimage,
    autoRotate: true,
    autoRotateSpeed: 2,
    enableControl: false, 
    fullscreen: false,
    controlBar: false 
});
bannerimageviewer.add(bannerpanorama);