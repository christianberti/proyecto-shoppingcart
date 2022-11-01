export const initialState = {
        user: null,
        isAuth: false,
      }

export const authReducer = (state, action) => {

    switch(action.type) {
        case 'LOGIN':
            return {
              ...state,
              user: action.payload,
              isAuth: true,
            };

        case 'LOGOUT':
            return {
              ...state,
              user: null,
              isAuth: false,
            };

        default:
            return state;
    }
}