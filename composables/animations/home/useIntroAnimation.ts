import gsap from 'gsap';

export const useIntroAnimation = () => {
  //Map
  const intro = document.querySelector('[data-animate=short-intro]');
  const dividers = document.querySelectorAll('[data-animate=divider]')
  const start = () => {

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: intro,
        start: "+=200 center",
        markers: true,
      },
    });

    scrollTl
      .fromTo(intro, {
        y: 10,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out'
      })
      .fromTo(dividers, {
        scaleX: 0,
        opacity: 0
      }, {
        scaleX: 1,
        stagger: 0.01,
        opacity: 0.3,
        duration: 1,
        ease: 'expo.out',
      }, '-=1')
  }


  return {
    intro,
    start
  };
}