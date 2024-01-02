export class MyDate {

  constructor(
    public year: number = 1994,
    public _month: number = 5,
    private _day: number = 9,
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if( type === 'days' ) {
      this._day += amount;
    }
    if( type === 'months' ) {
      this._month += amount;
    }
    if( type === 'years' ) {
      this.year += amount;
    }
  }

  private addPadding(value: number) {
    if( value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  get day() {
    return this._day
  }

  get isLeapYear() : boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month
  }

  set month(newValue) {
    if(newValue >= 1 && newValue <= 12) {
      this._month = newValue
    } else {
      console.error(`${newValue} - Month out of the range`)
    }
  } 

}

const myDate = new MyDate(2000, 9, 22);
console.log(myDate.printFormat());
myDate.month = 78;
console.log(myDate.month);
myDate.month = 1;
console.log(myDate.month);
myDate.month = 12;
console.log(myDate.month);
myDate.month = 0;
console.log(myDate.month);