(() => {
  //Before: let avengers;
  let avengers: number = 10;

  console.log({ avengers });

  const villains: number = 20;
  if (avengers < villains) {
    console.log('We have problems');
  } else {
    console.log('Avengers assemble');
  }

  avengers = Number('55A');
  console.log({ avengers });
})();
