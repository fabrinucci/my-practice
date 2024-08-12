//$ Correct

describe('Customer classifier', () => {
  test('When customer spent more than 500$, should be classified as premium', () => {
    //Ajustar
    const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
    const DBStub = sinon
      .stub(dataAccess, 'getCustomer')
      .reply({ id: 1, classification: 'regular' });

    //Actuar
    const receivedClassification =
      customerClassifier.classifyCustomer(customerToClassify);

    //Afirmar
    expect(receivedClassification).toMatch('premium');
  });
});

//! Incorrect
test('Should be classified as premium', () => {
  const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
  const DBStub = sinon
    .stub(dataAccess, 'getCustomer')
    .reply({ id: 1, classification: 'regular' });
  const receivedClassification =
    customerClassifier.classifyCustomer(customerToClassify);
  expect(receivedClassification).toMatch('premium');
});
