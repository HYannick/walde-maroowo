import gsap from 'gsap';

export const useMapSectionAnimation = () => {
  //Map
  const mapRegions = document.querySelectorAll('.map-region')
  const cityPicturesImages = document.querySelectorAll('[data-animate=city-picture]')
  const start = () => {
    gsap.fromTo(mapRegions, {
      scale: 0.8,
      transformOrigin: 'center',
      opacity: 0
    }, {
      scale: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".country-map-actions",
        start: "-=500 top",
        markers: true,
      },
      opacity: 1,
      duration: 1,
      ease: 'expo.out',
    })

    gsap.to(cityPicturesImages, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".country-map-actions",
        scrub: true
      },
    });
  }


  return {
    mapRegions,
    cityPicturesImages,
    start
  };
}