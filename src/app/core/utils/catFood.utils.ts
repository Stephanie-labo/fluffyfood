function calculateRER(weightKg:number) {
  return 70 * Math.pow(weightKg, 0.75);
}

function getEnergyFactor({ isSterilized:boolean, activityLevel:string, breed:CatBreedFactor }) {


  let factor = baseFactors[breed] || 1.2;

  // Activiteitsmodificatie
  if (activityLevel === 'actief') factor += 0.1;
  if (activityLevel === 'erg actief') factor += 0.2;

  // Sterilisatie vermindert energiebehoefte
  if (isSterilized) factor -= 0.1;

  return Math.max(factor, 1.0); // ondergrens
}

function calculateDailyCalories(weightKg:number, options:object) {
  const rer = calculateRER(weightKg);
  const factor = getEnergyFactor(options);
  return Math.round(rer * factor);
}
