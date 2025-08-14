function calculateRER(weightKg) {
  return 70 * Math.pow(weightKg, 0.75);
}

function getEnergyFactor({ isSterilized, activityLevel, breed }) {
  const baseFactors = {
    'Huiskat': 1.2,
    'Maine Coon': 1.3,
    'Britse Korthaar': 1.2,
    'Sphynx': 1.4,
    'Ragdoll': 1.2,
  };

  let factor = baseFactors[breed] || 1.2;

  // Activiteitsmodificatie
  if (activityLevel === 'actief') factor += 0.1;
  if (activityLevel === 'erg actief') factor += 0.2;

  // Sterilisatie vermindert energiebehoefte
  if (isSterilized) factor -= 0.1;

  return Math.max(factor, 1.0); // ondergrens
}

function calculateDailyCalories(weightKg, options) {
  const rer = calculateRER(weightKg);
  const factor = getEnergyFactor(options);
  return Math.round(rer * factor);
}
