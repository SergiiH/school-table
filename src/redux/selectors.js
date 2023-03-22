export const usersListSelector = (state) => state.User.UserList?.Items;
export const usersQuantitySelector = (state) => state.User.UserList?.Quantity;
export const lessonsListSelector = (state) => state.User.LessonsList?.Items;
export const userLoadingSelector = (state) => state.User.loading;

//rate

export const rateSelector = (state) => state.Rate.rate?.Items;
export const rateLoadingSelector = (state) => state.Rate.loading;
