export default function(state = null, action) {
  if (action.type === "USER_SELECTED") {
    return action.payload;
  }
  return state;
}
