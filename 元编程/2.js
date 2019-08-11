/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 23:31:43
 * @LastEditTime: 2019-08-11 23:34:31
 * @LastEditors: Please set LastEditors
 */
require("reflect-metadata")
class Yideng {

}
const key = Symbol.for("xx");
Reflect.defineMetadata(key, "目标值", Yideng);
let result = Reflect.getMetadata(key, Yideng);
console.log("reflect-metadata获取元数据",result)