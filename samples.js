
const scrollToTopBtn=document.getElementById("gototopsamples");
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

const realstatesamplepanorama1=new PANOLENS.ImagePanorama("homeImages/realestate1.jpg");
const realestateimage1=document.querySelector(".img1");
const realestateviewer1=new PANOLENS.Viewer({
    container: realestateimage1,
    autoRotate: true,
    autoRotateSpeed: 1.8,
});

realestateviewer1.add(realstatesamplepanorama1);

const realstatesamplepanorama2=new PANOLENS.ImagePanorama("homeImages/realestate2.jpg");
const realestateimage2=document.querySelector(".img2");
const realestateviewer2=new PANOLENS.Viewer({
    container: realestateimage2,
    autoRotate: true,
    autoRotateSpeed: 1.8,
});

realestateviewer2.add(realstatesamplepanorama2);

const landscapepanorama=new PANOLENS.ImagePanorama("homeImages/landscape.jpg");
const landscapeimage=document.querySelector(".img3");
const landscapeviewer=new PANOLENS.Viewer({
    container: landscapeimage,
    autoRotate: true,
    autoRotateSpeed: 1.8,
});

landscapeviewer.add(landscapepanorama);

const commercialpanorama=new PANOLENS.ImagePanorama("homeImages/commercial.jpg");
const commercialimage=document.querySelector(".img4");
const commercialviewer=new PANOLENS.Viewer({
    container: commercialimage,
    autoRotate: true,
    autoRotateSpeed: 1.8,
});

commercialviewer.add(commercialpanorama);
