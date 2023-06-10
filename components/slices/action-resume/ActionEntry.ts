import gsap from 'gsap';

export class ActionEntry {
  DOM: Record<string, any>;
  isHidden: boolean = false;
  constructor(el: Element) {
    this.DOM = {el};
    this.init();
  }

  init() {
    this.DOM.description = this.DOM.el.querySelector('.action-description');
    this.DOM.images = this.DOM.el.querySelectorAll('.action-picture img');
  }

  show() {
    this.isHidden = false
    return this.toggle()
  }

  hide() {
    this.isHidden = true
    return this.toggle()
  }

  toggle() {
    return Promise.all([
      this.toggleDescription(),
      this.toggleImages()
    ])
  }

  toggleDescription() {
    return gsap.fromTo(this.DOM.description, {
      opacity: this.isHidden ? 1 : 0,
      y: this.isHidden ? 0 : '100%',
    }, {
      opacity: this.isHidden ? 0 : 1,
      y: this.isHidden ? '-100%' : 0,
      duration: 1,
      ease: 'expo.inOut'
    })
  }


  toggleImages() {
    return gsap.fromTo(this.DOM.images, {
      opacity: this.isHidden ? 1 : 0.8,
      x: this.isHidden ? 0 : '100%',
    }, {
      opacity: this.isHidden ? 0.8 : 1,
      x: this.isHidden ? '-100%' : 0,
      duration: 1,
      stagger: 0.05,
      ease: 'expo.inOut'
    })
  }
}
