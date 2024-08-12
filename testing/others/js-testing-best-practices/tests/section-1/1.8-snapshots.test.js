//! Incorrect
it('TestJavaScript.com is renderd correctly', () => {
  //Arrange

  //Act
  const receivedPage = renderer
    .create(
      <DisplayPage page='http://www.testjavascript.com'>
        {' '}
        Test JavaScript{' '}
      </DisplayPage>
    )
    .toJSON();

  //Assert
  expect(receivedPage).toMatchSnapshot();
  //Ahora nosotros implícitamente mantenemos un fichero de 2000 lineas
  //cada salto de linea o comentario añadido van a romper nuestro test
});

//$ Correct
it('When visiting TestJavaScript.com home page, a menu is displayed', () => {
  //Arrange

  //Act
  const receivedPage = renderer
    .create(
      <DisplayPage page='http://www.testjavascript.com'>
        {' '}
        Test JavaScript{' '}
      </DisplayPage>
    )
    .toJSON();

  //Assert

  const menu = receivedPage.content.menu;
  expect(menu).toMatchInlineSnapshot(`
    <ul>
    <li>Home</li>
    <li> About </li>
    <li> Contact </li>
    </ul>
  
    `);
});
