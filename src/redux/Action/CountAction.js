export const INCREASE_NUMBER = 'INCREASE_NUMBER'
export const DECREASE_NUMBER = 'DECREASE_NUMBER'

export const increaseNum = () => {
    return {
        type: INCREASE_NUMBER,
    }
}
export const decreaseNum = () => {
    return {
        type: DECREASE_NUMBER,
    }
}