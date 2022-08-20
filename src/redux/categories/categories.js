const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialCategoryState = [];

const bookStat = (state = initialCategoryState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
export default bookStat;
