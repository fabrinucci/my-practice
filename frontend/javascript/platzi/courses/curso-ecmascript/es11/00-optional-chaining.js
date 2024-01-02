const users = {
  gndx: {
    country: "MX"
  },
  ana: {
    country: "CO"
  }
}

// console.log(users.bebeloper.country); // error
console.log(users?.bebeloper?.country); // undefined

// El ? es el optional changing y que no se rompa la aplicacion