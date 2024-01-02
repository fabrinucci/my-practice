class Product {
  getDetails() {
    // getDetails implementation
  }
  saveToDB() {
    // saveToDB implementation
  }
  displayInFrontend() {
    // displayInFrontend implementation
  }
}

class DigitalProduct extends Product {
  // DigitalProduct inherits all methods
}

// -----------------------------------------

class Product {
  getDetails() {
    // getDetails implementation
  }
  displayInFrontend() {
    // displayInFrontend implementation
  }
}

class PhysicalProduct {
  saveToDB() {
    // saveToDB implementation
  }
}

class digitalProduct extends Product {
  // digitalProduct inherits only Product methods
}
