import { types } from "../types/types";

export const cardsRecuder = (state = {}, action) => {
  switch (action.type) {

      case types.searchMovie:
        return {
            
            buscar:action.payload.buscar
        }

    default:
      return state;
  }
};
