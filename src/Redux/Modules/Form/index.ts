import { formQueryReducer } from "./form.query";
import { formSliceReducer } from "./form.slice";

const combinedReducer = {
  ...formQueryReducer,
  ...formSliceReducer,
};

export * from "./form.query";
export * from "./form.slice";
export default combinedReducer;
