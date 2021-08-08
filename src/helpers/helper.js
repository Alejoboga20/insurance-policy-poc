export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case 'european':
      increment = 1.3;
      break;
    case 'american':
      increment = 1.15;
      break;
    case 'assian':
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}
