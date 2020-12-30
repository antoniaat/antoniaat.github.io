const getClassName = (classNamesMap) => {
  const whiteSpace = ' ';

  return Object.keys(classNamesMap)
    .filter((className) => classNamesMap[className])
    .join(whiteSpace)
    .trim();
};

// eslint-disable-next-line import/prefer-default-export
export { getClassName };
