import { GET_PEOPLE_DATA, GET_SPECIES_DATA } from "../../constants";

export const globalReducer = (
  state = { peoplesdata: null, speciesData: null },
  action
) => {
  switch (action.type) {
    case GET_PEOPLE_DATA:
      return { ...state, peoplesdata: action?.data };
    case GET_SPECIES_DATA:
      return { ...state, speciesData: action?.data };
    default:
      return state;
  }
};
