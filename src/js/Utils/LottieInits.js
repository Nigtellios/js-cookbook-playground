import bodymovin from 'lottie-web';

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

export default lottie;
