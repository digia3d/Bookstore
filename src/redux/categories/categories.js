const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialCategoryState = [];

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const bookStat = (state = initialCategoryState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER_CONSTRUCTION';
    default:
      return state;
  }
};

export { checkStatus };
export default bookStat;
