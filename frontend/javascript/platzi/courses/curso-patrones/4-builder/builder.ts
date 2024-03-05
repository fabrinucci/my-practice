type AvailableColors = 'red' | 'black' | 'gray' | 'blue' | 'default';

// STEP 1
interface CarProductionLine {
  setAirBags(howMany: number): CarProductionLine;
  setColor(color: AvailableColors): CarProductionLine;
  setEdition(edition: EditionsType): CarProductionLine;
  resetProductionLine(): void;
}

// STEP 2
type CarCatalog = 'mastodon' | 'rhino';
type ConstructorParams = { modelToCustomizeInLine: CarCatalog };
type EditionsType = 'cvt' | 'signature' | 'default';
class SedanProductionLine implements CarProductionLine {
  private sedanCar!: BaseCar;
  private modelToCustomizeInLine!: CarCatalog;

  /**
   * For now the production line class is composed (creating) by the
   * different sedan car models. Ideally the line should receive the
   * sedan car instance as param, an aggregation relationship.
   *
   * @param modelToCustomizeInLine car model to customize in the line
   */
  constructor({ modelToCustomizeInLine }: ConstructorParams) {
    this.setModelToBuild(modelToCustomizeInLine);
    this.resetProductionLine();
  }

  /**
   * @override setAirBags() method
   * @param howMany airbags number
   * @returns production line working instance
   */
  setAirBags(howMany: number): SedanProductionLine {
    this.sedanCar.airBags = howMany;
    return this;
  }

  /**
   * @override setColor() method
   * @param color car color
   * @returns production line working instance
   */
  setColor(color: AvailableColors): SedanProductionLine {
    this.sedanCar.color = color;
    return this;
  }

  /**
   * @override setEdition() method
   * @param  edition car edition
   * @returns production line working instance
   */
  setEdition(edition: EditionsType): SedanProductionLine {
    this.sedanCar.edition = edition;
    return this;
  }

  /**
   * @param {string} model car model to be build in line
   */
  setModelToBuild(model: CarCatalog) {
    this.modelToCustomizeInLine = model;
  }

  /**
   * Emulates how the production line receives a new
   * sedan car to be customized for match the desired editions.
   */
  resetProductionLine() {
    this.sedanCar =
      this.modelToCustomizeInLine === 'mastodon'
        ? new MastodonSedanCar()
        : new RhinoSedanCar();
  }

  /**
   * Restart production line and returns customized sedan car instance.
   *
   * For this case we decided to set BaseCar as return type.
   *
   * @returns base car instance
   */
  build(): BaseCar {
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

// STEP 3
class BaseCar {
  private _edition!: EditionsType;
  private _model!: string;
  private _airBags: number = 2;
  private _color: AvailableColors = 'black';

  /**
   * Base car airBags attribute setter
   * @param howMany airbags number
   */
  set airBags(howMany: number) {
    this._airBags = howMany;
  }

  /**
   * Base car color attribute setter
   * @param color car color from a specific list
   */
  set color(color: AvailableColors) {
    this._color = color;
  }

  /**
   * Base car edition attribute setter
   * @param {string} edition car edition
   */
  set edition(edition: EditionsType) {
    this._edition = edition;
  }

  /**
   * Base car model attribute setter
   * @param {string} model car model (sedan/hatchbak)
   */
  set model(model: string) {
    this._model = model;
  }
}

class MastodonSedanCar extends BaseCar {
  constructor() {
    super();
    this.model = 'sedan';
  }
}

class RhinoSedanCar extends BaseCar {
  constructor() {
    super();
    this.model = 'sedan';
  }
}

// STEP 4
export class Director {
  private productionLine!: CarProductionLine;

  /**
   * Set the production line to be used for the director to build editions
   * @param productionLine contains concrete customization steps implementation
   */
  setProductionLine(productionLine: CarProductionLine) {
    this.productionLine = productionLine;
  }

  /**
   * CVT Edition customization steps
   */
  constructCvtEdition(): void {
    this.productionLine.setAirBags(4).setColor('blue').setEdition('cvt');
  }

  /**
   * Signature Edition customization steps
   */
  constructSignatureEdition(): void {
    this.productionLine.setAirBags(8).setColor('gray').setEdition('signature');
  }
}

/**
 * Main function
 */
function appBuilder(director: Director) {
  console.log('--- [TS] Calling appBuilder ---\n');

  if (!director) {
    console.log('--- No director provided ---');
    return;
  }

  const mastodonSedanProductionLine = new SedanProductionLine({
    modelToCustomizeInLine: 'mastodon',
  });

  director.setProductionLine(mastodonSedanProductionLine);

  director.constructCvtEdition();
  const mastodonSedanCvt = mastodonSedanProductionLine.build();
  console.log('--- Mastodon Sedan CVT ---\n');
  console.log(mastodonSedanCvt);

  director.constructSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log('\n--- Mastodon Sedan Signature ---\n');
  console.log(mastodonSedanSignature);
}

appBuilder(new Director());

// This is not relevant for the course, don't worry about this
export {};
