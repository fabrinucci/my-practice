// STEP 1
interface BaseCar {
  showCost(): void;
}

// STEP 2
class MastodonCar implements BaseCar {
  showCost(): void {
    console.log('[MASTODON] Car Cost: 300,000 MXN');
  }
}

class RhinoCar implements BaseCar {
  showCost(): void {
    console.log('[RHINO] Car Cost: 100,000 MXN');
  }
}

// STEP 3
interface CarFactory {
  makeCar(): BaseCar;
}

// STEP 4
class MastodonCarFactory implements CarFactory {
  makeCar(): BaseCar {
    return new MastodonCar();
  }
}

class RhinoCarFactory implements CarFactory {
  makeCar(): BaseCar {
    return new RhinoCar();
  }
}

// Main function
function appFactory(factory: CarFactory) {
  console.log('--- [TS] Calling appFactory ---\n');
  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }

  const car: BaseCar = factory.makeCar();
  car.showCost();
}

appFactory(new MastodonCarFactory());
appFactory(new RhinoCarFactory());

type FactoryType = 'mastodon' | 'rhino';

function createFactory(type: FactoryType) {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory,
  };

  const FactoryClass = factories[type];
  return new FactoryClass();
}

appFactory(createFactory('mastodon'));
appFactory(createFactory('rhino'));

// This is not relevant for the course, don't worry about this
export {};
