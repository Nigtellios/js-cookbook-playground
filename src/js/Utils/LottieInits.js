import bodymovin from 'lottie-web';

const lottie = {
  init(el, path) {
    return bodymovin.loadAnimation({
      container: document.getElementsByClassName(`.${el}`),
      path: path,
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
}

export default lottie;
