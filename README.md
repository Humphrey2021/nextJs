# Next.js

> Next.js 是 React服务端渲染应用框架，用于构建SEO友好的SPA应用

1. 支持两种预渲染方式，静态生成和服务端渲染
2. 给予页面的路由系统，路由零配置
3. 自动代码拆分，优化页面加载速度
4. 支持静态导出，可将应用导出为静态网站
5. 内置CSS-in-JS库styled-jsx
6. 方案成熟，可用于生产环境
7. 应用部署简单，拥有专属部署环境 Vercel，也可以部署在其他环境

## 创建 Next.js 项目

创建：npm init next-app project-name(项目名称)
运行：npm run dev
访问：localhost:3000

临时安装 create-next-app 用于创建 Next.js 项目

## 基于页面的路由系统

### 创建页面

- 在 Next.js 中，页面是被放置在 pages 文件夹中的 React 组件
- 组件需要被默认导出
```js
export default function List() {
    return <div>List page works</div>
}
```
- 组建文件中不需要引入 React
- 页面地址与文件地址是对应的关系
```
pages/index.js          /
pages/list.js           /list
pages/post/first.js     /post/first
```

### 页面跳转

- Link 组件默认使用 JavaScript 进行页面跳转，即 SPA 形式的跳转
- 如果浏览器中 JS 被禁用，则使用链接跳转
- Link 组件中不应添加 href 属性以外的属性，其余属性添加到 a 标签上
- Link 组件通过预取（在生产中）功能自动优化应用程序以获得最佳性能

```js
import Link from 'next/link'
<Link href="/list">
    <a title="list page">list page</a>
```
### 静态资源、元数据和 CSS
#### 静态资源

应用程序根目录中的 public 文件夹用于提供静态资源
通过以下形式进行访问

```
public/images/1.jpg ---> /images/1.jpg
public/css/base.css ---> /css/base.css
```

#### 元数据

通过 Head 组件修改元数据
```js
import Head from 'next/head'

<>
    <Head>
        <title>Index Page</title>
    </Head>
</>
```

#### CSS 样式

- __内置 styled-jsx__

在 Next.js 中内置了 styled-jsx，它是一个 CSS-in-JS 库，允许在 React 组件中编写 CSS，CSS仅作用于组件内部
```js
<Link href="/list">
    <a className="dmeo">jump to list page</a>
</Link>

<style jsx>{`
    .demo {
        color: red;
    }
`}</style>
```
- __CSS模块__
通过使用CSS模块功能，允许将组件的CSS样式编写在单独的CSS文件中。
CSS模块约定样式文件的名称必须为“组件文件名称.module.css”

```js
// index.module.css
.p { color: green }

// index.js
import styles from './index.module.css'
<div className={styles.p}></div>
```

- __全局样式文件__
1. 在pages文件夹中新建`_app.js`文件并加入如下代码
2. 在项目根目录下创建`styles`文件夹，并在其中创建`global.css`
3. 在`_app.js`中通过`import`引入`global.css`
4. 重新启动开发服务器

```js
export default function App({ Component, pageProps }) {
    return <Component { ...pageProps } />
}
```

### 预渲染

- __概述__

预渲染是指数据和HTML的拼接在服务器端提前完成
预渲染可以是SEO更加友好
预渲染会带来更好的用户体验，可以无需允许JS即可查看应用程序UI

- __预渲染的两种形式__

> 在 Next.js 中支持两种形式的预渲染：静态生成和服务器端渲染
> 静态生成和服务器端渲染是生成 HTML 的时机不同。

静态生成：静态生成是在构建时生成 HTML。以后的每个请求都共用构建时生成好的 HTML
服务器端渲染：服务器端渲染是在请求时生成 HTML。每个请求都会重新生成 HTML

- __两种预渲染方式的选择__

> Next.js 允许开发者为每个页面选择不同的预渲染方式，不同的预渲染方式拥有不同的特点，应根据场景进行渲染.

_但建议大多数页面使用静态生成。_

静态生成一次构建，反复使用，访问速度快，因为页面都是事先生成好的。
使用场景：营销页面、博客文章、电子商务产品列表、帮助和文档等。

服务器端渲染访问速度不如静态生成快，但是由于每次请求都会重新渲染，所以使用数据频繁更新的页面或页面内容随请求变化而变化的页面。


