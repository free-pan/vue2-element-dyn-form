export const deepCopy = function fun(obj) {
  if (obj === null || obj === undefined) return null
  if (typeof obj !== 'object') return obj
  if (obj.constructor === Date) return new Date(obj)
  const newObj = new obj.constructor() //保持继承链
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      //不遍历其原型链上的属性
      const val = obj[key]
      // eslint-disable-next-line
      newObj[key] = typeof val === 'object' ? fun(val) : val // 使用arguments.callee解除与函数名的耦合
    }
  }
  return newObj
}
