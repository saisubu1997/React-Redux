export const selectUser = user => {
  console.log("You Clicked On User: ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  };
};
