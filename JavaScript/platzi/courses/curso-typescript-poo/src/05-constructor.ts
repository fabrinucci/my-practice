export class MyDate {

  constructor(
    public year: number = 1994,
    public month: number = 5,
    private day: number = 9,
  ) {}

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

const myDate = new MyDate(2020, 9, 22);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2005);
console.log('(2005) =>', myDate3.printFormat());

const myDate4 = new MyDate(2015, 6);
console.log('(2015, 6) =>', myDate4.printFormat());
