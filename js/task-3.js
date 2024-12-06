function getElementWidth(content, padding, border) {
  const borderBox =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  return borderBox;
}

console.log(`Загальна ширина елемента складає: ${getElementWidth('50px', '8px', '4px')}px.`);
console.log(`Загальна ширина елемента складає: ${getElementWidth('60px', '12px', '8.5px')}px.`);
console.log(`Загальна ширина елемента складає: ${getElementWidth('200px', '0px', '0px')}px.`);
