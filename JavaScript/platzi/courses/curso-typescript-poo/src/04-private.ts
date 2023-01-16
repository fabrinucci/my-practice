export class MyDate {
  private day: number;
  public month: number;
  public year: number;

  constructor(year: number, month: number, day: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`
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

  private addPadding(value: number) {
    if( value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

}

const myDate = new MyDate(2020, 9, 10);
console.log(myDate.printFormat());
