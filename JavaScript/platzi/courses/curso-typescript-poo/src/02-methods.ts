export class MyDate {
  day: number;
  month: number;
  year: number;

  constructor(year: number, month: number, day: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
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

console.log(myDate.printFormat());
myDate.add(15, 'days')
console.log(myDate.printFormat());
myDate.add(5, 'months')
console.log(myDate.printFormat());
myDate.add(27, 'years')
console.log(`⭐⭐⭐ - ${myDate.printFormat()} - 1978⭐ 1986⭐ 2022⭐`);