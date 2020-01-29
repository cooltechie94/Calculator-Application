import { printSumType,CLEAR_ALL } from './types'
export default function printSum(total){
    return {
        type:printSumType,
        payload:total
    }
}