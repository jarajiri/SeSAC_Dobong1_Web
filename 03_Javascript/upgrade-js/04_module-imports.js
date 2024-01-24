// 모듈 사용 - import 키워드를 사용
// import {flr, getFlr} from './04_export1.js';
import * as flowers from './04_export1.js'
// console.log(flr);
// console.log(getFlr(4));
console.log(flowers.flr);
console.log(flowers.getFlr(2));
//export2
import { animals, showAnimals } from './04_export2.js';
console.log(animals);
showAnimals();
//export-default
import sayHi from './05_export-default.js';
sayHi();