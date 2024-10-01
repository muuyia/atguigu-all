// * 代表所有成员  导入的内容会被当成对象来处理
import * as m1 from './module.js'
console.log(m1.PI)
console.log(m1.sum(10,20))

let person = new m1.Person("zhangsa ",10)
person.sayHello()
