//方式一
// * 代表所有成员  导入的内容会被当成对象来处理
import * as m1 from './module.js'
console.log(m1.PI)
console.log(m1.sum(10,20))

let person = new m1.Person("zhangsa ",10)
person.sayHello()

//方式二
import {PI,sum,Person} from './module.js'

console.log(PI)
console.log(sum(10,20))

let person2 = new Person("zhangsa ",10)
person2.sayHello()