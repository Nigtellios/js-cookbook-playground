/**
 * Resize Animation Object - Resize Selected animation to match parent width calculated based on whole window inner width
 * @type {{init(string, string): void, calcResize(*, number): void, initResizer(number): number}}
 */
const resizeAnimation = {
  /**
   * Initialize animation resize
   * @param { string } animationScope
   * @param { number } scaleModifier
   */
  init(animationScope, scaleModifier) {
    resizeAnimation.initResizer(scaleModifier);
    resizeAnimation.calcResize(animationScope, scaleModifier);
    window.addEventListener('resize', () => {
      resizeAnimation.calcResize(animationScope, scaleModifier);
    });
  },

  /**
   * Init Resizer which takes selected ScaleModifier as a parameter
   * @param { number } scaleModifier
   * @returns {number}
   */
  initResizer(scaleModifier) {
    const width = window.innerWidth;
    return Math.round(((width / 1000) * scaleModifier) * 100) / 100;
  },

  /**
   * Calculates proper scale value
   * @param animationScope
   * @param { number } scaleModifier
   */
  calcResize(animationScope, scaleModifier) {
    animationScope = document.getElementById(animationScope);
    animationScope.setAttribute('style', `transform: scale(${resizeAnimation.initResizer(scaleModifier)}) rotate(90deg);`);
  }
}

export default resizeAnimation;
