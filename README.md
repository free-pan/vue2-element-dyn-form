# vue2-element-dyn-form

基于vue2对element-ui的form组件进行扩展

## 解决的问题与特点

* 支持表单项的动态创建
* 表单的编辑与只读模式
* 支持手动设置表单项的错误提示信息
* 支持表单项的动态显示和隐藏
* 可扩展自己的表单项

## 安装与引入

`npm install vue2-element-dyn-form`

```
import DynForm from 'vue2-element-dyn-form'
Vue.use(DynForm)
```


## 重要目录/文件说明

```
|styleguide.config.js                            # vue-styleguidist 配置文件
|styleguide.global.requires.js                   # vue-styleguidist 示例中用到的第三方依赖
|docs                                            # vue-styleguidist 的markdown示例文件目录
|packages                                        # 组件目录
|examples                                        # 示例目录
```

## 命令

### 依赖安装
```
npm run install
```

### 热加载开发
```
npm run serve
```

### 生产环境编译打包
```
npm run build
```

### 修复代码格式化问题
```
npm run lint
```

### 生产打包结果分析
```
npm run analyzer
```

### 使用prettier对代码进行统一格式化
```
npm run prettier
```

### 组件打包
```
npm run lib
```

### 运行styleguide
```
npm run styleguide
```

### 打包styleguide

```
npm run styleguide:build
```
