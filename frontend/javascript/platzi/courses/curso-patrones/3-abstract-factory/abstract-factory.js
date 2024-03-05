class MastodonCar {
  useGPS() {
    throw new Error('Method not implemented!');
  }
}
class RhinoCar {
  useGPS() {
    throw new Error('Method not implemented!');
  }
}
class MastodonSedanCar extends MastodonCar {
  useGPS() {
    console.log('[SEDAN] Mastodon GPS');
  }
}
class MastodonHatchbackCar extends MastodonCar {
  useGPS() {
    console.log('[HATCHBACK] Mastodon GPS');
  }
}
class RhinoSedanCar extends RhinoCar {
  useGPS() {
    console.log('[SEDAN] Rhino GPS');
  }
}
class RhinoHatchbackCar extends RhinoCar {
  useGPS() {
    console.log('[HATCHBACK] Rhino GPS');
  }
}
class CarAbstractFactory {
  createMastodon() {
    throw new Error('Method not implemented!');
  }
  createRhino() {
    throw new Error('Method not implemented!');
  }
}
class SedanCarFactory {
  createMastodon() {
    return new MastodonSedanCar();
  }
  createRhino() {
    return new RhinoSedanCar();
  }
}
class HatchbackCarFactory {
  createMastodon() {
    return new MastodonHatchbackCar();
  }
  createRhino() {
    return new RhinoHatchbackCar();
  }
}
function appAbstractFactory(factory) {
  console.log('--- [JS] Calling appAbstractFactory ---\n');
  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();
  mastodon.useGPS();
  rhino.useGPS();
}
appAbstractFactory(new HatchbackCarFactory());
appAbstractFactory(new SedanCarFactory());
function createFactory(name) {
  const factories = { sedan: SedanCarFactory, hatchback: HatchbackCarFactory };
  const Factory = factories[name];
  return new Factory();
}
appAbstractFactory(createFactory('hatchback'));
appAbstractFactory(createFactory('sedan'));
