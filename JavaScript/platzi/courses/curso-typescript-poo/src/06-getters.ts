export class MyDate {

  constructor(
    public year: number = 1994,
    public month: number = 5,
    private _day: number = 9,
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if( type === 'days' ) {
      this._day += amount;
    }
    if( type === 'months' ) {
      this.month += amount;
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

}

const myDate = new MyDate(2000, 9, 22);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log('2000', myDate.isLeapYear)

const myDate2 = new MyDate(2001, 9, 22);
console.log('2001', myDate2.isLeapYear)

const myDate3 = new MyDate(2002, 9, 22);
console.log('2002', myDate3.isLeapYear)

const myDate4 = new MyDate(2003, 9, 22);
console.log('2003', myDate4.isLeapYear)

const myDate5 = new MyDate(2004, 9, 22);
console.log('2004', myDate5.isLeapYear)