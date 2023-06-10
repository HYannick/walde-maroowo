import gsap from 'gsap';
import Splitting from 'splitting';

export const useHeroAnimation = () => {
  const firstImage = document.querySelector('[data-animate=first-image]');
  const firstRender = gsap.timeline();
  const polygons = Array.from(document.querySelectorAll('.hero .polygon'))
  const title = Splitting() as any;

  const start = () => {
    firstRender.fromTo(firstImage, {
      scale: 1.1,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'expo.Out'
    }, '-=0.5')
      .to(polygons, {
        opacity: 1,
        scale: 1,
        ease: 'expo.inOut',
        duration: 1.2,
      }, '-=1')
      .fromTo(title[0].chars, {
        y: 170,
        duration: 1,
        opacity: 0,
      }, {
        y: 0,
        stagger: 0.001,
        opacity: 1,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.8')
      .fromTo(title[1].chars, {
        y: 170,
        duration: 1,
        opacity: 0,
      }, {
        y: 0,
        stagger: 0.01,
        opacity: 1,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.8')

    gsap.to('.heading', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        scrub: true
      },
    });
  }


  return {
    firstImage,
    polygons,
    title,
    start
  };
}