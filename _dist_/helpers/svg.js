export const svg = (width, height) => {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  el.setAttribute('width', width);
  el.setAttribute('height', height);
  el.setAttribute('viewBox', `0 0 ${width} ${height}`);
  return el;
};

export const g = (width, height) => {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  return el;
};
