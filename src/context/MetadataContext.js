import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const mdReducer = (state, action) => {
  switch (action.type) {
    case "add_NewData":
      return [...state, action.payload.obj];
  }
};

//adding new set of data from homescreen when swim icon clicked
const addNewData = (dispatch) => {
  return async (id, obj, callback) => {
    await jsonServer.post(`/${id}`, { obj, callback });
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  mdReducer,
  { addNewData },
  [] //inital state
);
