
const lastid = 0;

export default function reducer(state = [], action) {
    if (action.type === 'bugAdded') {
        return [
            ...state,
            {
                id: ++lastid,
                discription: action.payload.discription,
                resolved: false,
            }
        ];
    }
    else if (action.type === 'bugRemoved') {
        return state.filter(bug => bug.id !== action.payload.id);
    }
    return state

}