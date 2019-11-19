const makeAnIP = fn => {
  return `${fn()}.${fn()}.${fn()}.${fn()}`;
};

function randomNumberGenerator() {
  const randomNum = Math.floor(Math.random() * 255);

  return randomNum;
}

export { makeAnIP, randomNumberGenerator };
