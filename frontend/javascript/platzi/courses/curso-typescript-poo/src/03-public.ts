export class MyDate {
  public day: number;
  public month: number;
  public year: number;

  constructor(year: number, month: number, day: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if( type === 'days' ) {
      this.day += amount;
    }
    if( type === 'months' ) {
      this.month += amount;
    }
    if( type === 'years' ) {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1995, 2, 3);
