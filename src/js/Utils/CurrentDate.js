export class Today {
  /**
   * Constructor: use push=*= to select how many Years/Months/Days you want to add to returned value
   * @param { string } separator
   * @param { number } pushYears
   * @param { number } pushMonths
   * @param { number } pushDays
   */
  constructor({ separator = '-', pushYears= 0, pushMonths= 0, pushDays = 0 }) {
    this.dateInstance = new Date();
    this.separator = separator;
    this.pushYears = pushYears;
    this.pushMonths = pushMonths;
    this.pushDays = pushDays;
  }

  /**
   * Getter for date
   * @returns {*}
   */
  get getDate() {
    return this.calcCurrentDate();
  }

  /**
   * Calculates Current Date
   * @returns {*}
   */
  calcCurrentDate() {
    let year = this.dateInstance.getFullYear();
    let month = this.dateInstance.getMonth() + 1;
    let day = this.dateInstance.getDate();
    let currentDate;

    0 === !this.pushYears ? year = this.dateInstance.getFullYear() + this.pushYears : year;
    0 === !this.pushMonths ? month = this.dateInstance.getMonth() + 1 + this.pushMonths : month;
    0 === !this.pushDays ? day = this.dateInstance.getDate() + this.pushDays : day;

    month < 10 ? month = `0${this.dateInstance.getMonth()}` : month;

    currentDate = year + this.separator + month + this.separator + day;
    return currentDate;
  }
}