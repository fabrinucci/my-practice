//@! Incorrecto
it('When asking for an admin, ensure only ordered admins in results', () => {
  //presuponiendo que hayamos agregado aquí dos administradores "admin1", "admin2" y "user1"
  const allAdmins = getUsers({ adminOnly: true });

  let admin1Found,
    admin2Found = false;

  allAdmins.forEach((aSingleUser) => {
    if (aSingleUser === 'user1') {
      assert.notEqual(aSingleUser, 'user1', 'A user was found and not admin');
    }
    if (aSingleUser === 'admin1') {
      admin1Found = true;
    }
    if (aSingleUser === 'admin2') {
      admin2Found = true;
    }
  });

  if (!admin1Found || !admin2Found) {
    throw new Error('Not all admins were returned');
  }
});

//$ Correcto
it('When asking for an admin, ensure only ordered admins in results', () => {
  //presuponiendo que hayamos agregado aquí dos administradores
  const allAdmins = getUsers({ adminOnly: true });

  expect(allAdmins)
    .to.include.ordered.members(['admin1', 'admin2'])
    .but.not.include.ordered.members(['user1']);
});
