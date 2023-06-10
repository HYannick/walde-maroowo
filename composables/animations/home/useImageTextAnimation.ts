import gsap from 'gsap';

export const useImageTextAnimation = () => {
  const imageTextContent = document.querySelector('[data-animate=image-text-content]')
  const imageTextPictures = document.querySelectorAll('[data-animate=image-text-picture]')
  const start = () => {
    gsap.to(imageTextContent, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".image-text",
        scrub: true
      },
    });
    gsap.fromTo(imageTextPictures, {
      filter: 'grayscale(100%)',
      ease: "none",
    }, {
      filter: 'grayscale(0%)',
      scrollTrigger: {
        trigger: ".image-text",
        scrub: true
      },
    });
  }


  return {
    imageTextContent,
    start
  };
}