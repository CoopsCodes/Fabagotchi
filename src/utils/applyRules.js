const applyRules = fab => {
  if (fab.hunger) {
    fab.hunger += 1;
  }
  return fab;
};

export default applyRules;
