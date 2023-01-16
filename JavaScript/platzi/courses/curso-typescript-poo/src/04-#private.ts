type PartOfTheCalendar = 'day' | 'month' | 'year';

export class MyDate {
  year: number;
  private month: number;
  #day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.#day = day;
  }

  printFormat(): string {
    const { year } = this;
    const day = this.#addPadding(this.#day);
    const month = this.#addPadding(this.month);
    return `${day}/${month}/${year}`;
  }

  add(amount: number, type: PartOfTheCalendar) {
    if (type === 'day') this.#day += amount;
    if (type === 'month') this.month += amount;
    if (type === 'year') this.year += amount;
  }

  #addPadding(value: number) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  //  private addPadding (value: number) {
  //     if (value < 10) return `0${value}`;
  //     return `${value}`;
  // }
}

const date = new MyDate(1997, 10, 8);
console.log(date);
