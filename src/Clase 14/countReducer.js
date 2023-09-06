export const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        case '42':
            return {count: action.payload}
        case 'random':
            return {count: action.payload}
        default: 
            throw new Error
    }
}