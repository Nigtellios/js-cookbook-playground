import bodymovin from 'lottie-web';
import resizeAnimation from "./ResizeAnimation";
import * as moon from '../../animations/moon-phases.json';
import * as sparkles from '../../animations/sparkles-animation.json';


const lottie = {
  init(el, data) {
    return bodymovin.loadAnimation({
      container: document.getElementById(`${el}`),
      animationData: data,
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
}

const animations = {
  init() {
    lottie.init('planet', moon);
    lottie.init('sparkles', sparkles);
    resizeAnimation.init('sparkles', 3);
  }
}

export { animations };
