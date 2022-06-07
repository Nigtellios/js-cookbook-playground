export class InfoTile {

  /**
   * Class Constructor
   * @param { string } scope
   * @param { string } className
   * @param { object } settings
   * @param { object } data
   */
  constructor(scope, className, settings, data) {
    this.scope = scope;
    this.className = className;
    this.settings = settings;
    this.fragment = '';
    this.data = data;
    this.init();
  }

  /**
   * Init Function - run every necessary method
   */
  init() {
    this.createFragment(this.className, this.settings, this.data);
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
   * @param { string } className
   * @param { object } settings
   * @param { object } data
   */
  createFragment(className, settings, data) {
    if (className.length > 0) {
      this.fragment = `
      <div class="${className}" ${this.parseSettings(settings)}>
        <div class="${className}__content">`;

      if (data !== null && data !== undefined) {
        this.fragment += `${data}`;
      }

      this.fragment += `
        </div>
      </div>`;

      return this.fragment;
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
