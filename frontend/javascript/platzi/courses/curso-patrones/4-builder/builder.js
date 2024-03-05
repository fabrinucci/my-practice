class CarProductionLine {
  setAirBags(howMany) {
    throw new Error('Method not implemented!');
  }
  setColor(color) {
    throw new Error('Method not implemented!');
  }
  setEdition(edition) {
    throw new Error('Method not implemented!');
  }
  resetProductionLine() {
    throw new Error('Method not implemented!');
  }
}

class SedanProductionLine extends CarProductionLine {
  constructor({ modelToCustomizeInLine }) {
    super();
    this.setModelToBuild(modelToCustomizeInLine);
    this.resetProductionLine();
  }
  setAirBags(howMany) {
    this.sedanCar.airBags = howMany;
    return this;
  }
  setColor(color) {
    this.sedanCar.color = color;
    return this;
  }
  setEdition(edition) {
    this.sedanCar.edition = edition;
    return this;
  }
  setModelToBuild(model) {
    this.modelToCustomizeInLine = model;
  }
  resetProductionLine() {
    this.sedanCar =
      this.modelToCustomizeInLine === 'mastodon'
        ? new MastodonSedanCar()
        : new RhinoSedanCar();
  }
  build() {
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

class BaseCar {
  constructor() {
    this._edition = '';
    this._model = '';
    this._airBags = 2;
    this._color = 'black';
  }
  set airBags(howMany) {
    this._airBags = howMany;
  }
  set color(color) {
    this._color = color;
  }
  set edition(edition) {
    this._edition = edition;
  }
  set model(model) {
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

class Director {
  setProductionLine(productionLine) {
    this.productionLine = productionLine;
  }
  constructCvtEdition() {
    this.productionLine.setAirBags(4).setColor('blue').setEdition('cvt');
  }
  constructSignatureEdition() {
    this.productionLine.setAirBags(8).setColor('red').setEdition('signature');
  }
}

function appBuilder(director) {
  console.log('--- [JS] Calling appBuilder ---\n');
  if (!director) {
    console.log('--- No director provided ---');
    return;
  }
  const mastodonSedanProductionLine = new SedanProductionLine({
    modelToCustomizeInLine: 'mastodon',
  });
  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCvtEdition();
  const mastodnSedanCvt = mastodonSedanProductionLine.build();
  console.log('--- Mastodon Sedan CVT ---\n');
  console.log(mastodnSedanCvt);
  director.constructSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log('\n--- Mastodon Sedan Signature ---\n');
  console.log(mastodonSedanSignature);
}

appBuilder(new Director());
