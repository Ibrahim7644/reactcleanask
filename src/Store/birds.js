import { combineReducers } from 'redux';

// Action for Birds
const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";

// addBird Action
export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird,
  };
}
// Increment Bird Action
export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird,
  };
}

// Default reducer

const defaultBirds = [
  {
    name: "robin",
    views: 1,
  },
];

// Reducer for Birds

function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1,
        },
      ];
    case INCREMENT_BIRD:
      const bird = state.find((b) => action.bird === b.name);
      const birds = state.filter((b) => action.bird !== b.name);
      return [
          ...birds,
        {
          ...bird,
          views: bird.views + 1
        }];
    default:
      return state;
  }
}

const birdApp = combineReducers({
    birds
  });
  
  export default birdApp;