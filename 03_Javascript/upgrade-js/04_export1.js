// 모듈만들기 export 이용
// 한 번에 내보내기
// es6이후 버전부터 사용
// package.json 에서 설정필요

const flowers = ['rose','sunflower','tulip'];
function getFlowers(idx){
    if(idx>=flowers.length || idx<0) return 'x'
    return flowers[idx]
}
// console.log(getFlowers(2));
// export {flowers, getFlowers}
export {flowers as flr, getFlowers as getFlr} // 별칭 사용으로 내보내기 