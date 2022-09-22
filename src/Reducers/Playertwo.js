const initialState = {
    name: 'Chile',
    score: 9620
}

export default function PlayertwoReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'INC_PLAYERTWO_SCORE':
            return { ...state, score: state.score + 2 }
        case 'DEC_PLAYERTWO_SCORE':
            return { ...state, score: state.score - 2 }
        case 'PLAYERTWO_OWNSCORE':
            return { ...state, score: state.score - payload }
        default:
            return state
    }
}