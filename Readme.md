# 爱发电 API

这是一个爱发电开发者 API 的简易化包装，可以当作一个简单的 SDK 使用。

注意：该包仅支持 Node.js，请在服务器端使用。（正确做法也应该是从服务器端请求）

## 使用方法

### 0x00 安装

```bash
npm install afdian-api -S
```

支持 TypeScript，无需额外安装类型包。

### 0x01 引入到项目

以下是一个最小化的例子：

```js
import Afdian from 'afdian-api';

const afdian = new Afdian({
  token: '',
  userId: '',
});
```

### 0x02 使用 API

所有 API 都经过了基于 `node-fetch` 做的简单包装，方法将直接返回解析后的回包，没有做任何其他处理。

#### ping

ping(): Promise\<Response>

例子：

```js
const res = await afdian.ping();
```

#### queryOrder

queryOrder(page: number): Promise\<Response>

例子：

```js
const res = await afdian.queryOrder(1);
```

#### querySponsor

querySponsor(page: number): Promise\<Response>

例子：

```js
const res = await afdian.querySponsor(1);
```

## License

MIT
