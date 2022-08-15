import pipe from './pipe.mjs'


function toNearestFive(int){
    return Math.round(int/5)*5
}

console.log([3,5,7,8,0,103].map((el)=>toNearestFive(el)))

function asPercent(proportion){
    return ((Math.round(proportion*100))-50)*2
}

function asProportion(percent){
    return percent/100
}

console.log('%',[0,0.0001,0.01,0.171,0.99999,1].map(el=>asPercent(el)))


export default function round(num){
    return pipe(asPercent,toNearestFive,asProportion)(num)
}

//console.log(round(.101))