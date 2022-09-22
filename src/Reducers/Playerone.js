const initialState = {
    name: 'Argentina',
    score: 61
}

export default function PlayeroneReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'INC_PLAYERONE_SCORE':
            return { ...state, score: state.score + 2 }
        case 'DEC_PLAYERONE_SCORE':
            return { ...state, score: state.score - 2 }
        case 'PLAYERONE_OWNSCORE':
            return { ...state, score: state.score + payload }
        default:
            return state;
    }
}
