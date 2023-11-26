const useCapitalize = ( word ) => {
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return capitalizeFirstLetter(word);
};

export default useCapitalize;
