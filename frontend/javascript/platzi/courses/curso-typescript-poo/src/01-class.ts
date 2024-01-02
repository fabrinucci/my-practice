// const date = new Date();
// date.getTime()
// date.getFullYear()
// date.getDay()

// const date2 = new Date(1981, 3, 10);
// date2.getTime()
// date2.getFullYear()
// date2.getDay()

// console.log(date);
// console.log(date2);

export class MyDate {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const myDate = new MyDate(20, 5, 1985);