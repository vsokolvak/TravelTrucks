export const createNormEquipment = (equip) => {
  // масив ключів обєкту параметрів
  const equipNames = Object.keys(equip);

  // на основі ключів створюю новий масив обєктів параметрів, які присутні в авто, з атрибутами
  // name назва опції
  const normalizeEquip = equipNames
    .map((key) => ({ name: key, hasThis: equip[key] }))
    .filter((item) => item.hasThis);


  return normalizeEquip;
};
