# svelte-ui-template-rollup
## What

这是一个 svelte 组件库的 starter。
可以用它构建自己或者团队的组件库。

好处是：无论用户使用什么前端框架（Vue, React, Angular 等），都可以引用基于 svelte 构建的组件库里的组件。
因为 svelte 编译完的组件其实是 js 模块，即无框架组件。

技术栈：rollup + ts + svelte + less

## Usage

### 1.下载项目

### 2.开发组件

你可以继续在 lib 下面开发新的组件

### 3.打包组件库

组件开发好了，就可以打包组件库了

```javascript
npm run build
```

### 4.测试组件

可以在 example 文件夹下写个 HTML 文件来测试打包好的组件。

### 5.发布组件

可以使用 npm publish 发布自己的跨框架组件库了！
