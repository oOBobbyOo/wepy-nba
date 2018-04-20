const toFixed = param => {
  return parseFloat(param * 100).toFixed(1) + '%';
};

export { toFixed };
