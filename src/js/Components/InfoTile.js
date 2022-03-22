export class InfoTile {

  /**
   * Class Constructor
   * @param { string } scope
   * @param { string } className
   * @param { object } settings
   */
  constructor(scope, className, settings) {
    this.scope = scope;
    this.className = className;
    this.settings = settings;
    // this.data = data;
    this.init();
  }

  init() {
    this.createFragment(this.className, this.settings);
    this.createRange(this.scope, this.fragment);
  }

  /**
   * Returns Object values with their keys.
   * @param { object } settings
   * @returns { string }
   */
  parseSettings(settings) {
    for (let property in settings) {
      return `${(property)}="${settings[property]}"`;
    }
  }

  /**
   * Creates HTML Fragment with provided parameters and data.
   * @param className
   * @param settings
   */
  createFragment(className, settings) {
    if (className.length > 0) {
      return this.fragment = `
        <div class="${className}" ${this.parseSettings(settings)}>
            <p>
                Siema
            </p>
        </div>
        `;
    } else {
      console.log(`Please provide a className for your information tile.`);
      return this.fragment = `<h1>Please provide proper parameters for InfoTile.</h1>`;
    }
  }

  /**
   * Creates Range for InfoTiles and prints them inside it
   * @param { string } scope
   * @param { string } fragment
   */
  createRange(scope, fragment) {
    const tileRange = document.createRange();
    const tileParent = document.getElementById(`${scope}`);
    tileRange.selectNode(tileParent);
    const tileFragment = tileRange.createContextualFragment(fragment);
    tileParent.appendChild(tileFragment);
  }
}
