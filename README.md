# HTTP NODE SERVER

## 学习目的

- 了解 HTTP Server 的工作方式
- 熟悉 HTTP/1.1 协议结构
- 熟悉 HTTP/1.1 协议中常见 Header 和 Status Code 的含义
- 熟悉 RESTful 约定
- 实现一个基于 RESTful 预定的 HTTP Server
- 特性：
  - CORS（跨域资源共享）
  - Cookie / Session
  - 浏览器缓存控制

## pass1

- OSI 参考模型和 TCP/IP 五层模型
- HTTP/1.1 协议
- 请求和响应
- RESTful 约定
- Nodejs 的 net 模块和流
- 设计一个 HTTP Server
- 完成 HTTP Server 主体框架代码

## RESTful 约定

主要原则

- 所有的操作都是对资源操作
- Method 只能用于描述对资源的操作方式
- CURD 操作对应为 POST、PUT、GET 和 DELETE
- URI 只能用于描述资源位置
- 使用 Status Code 来描述对资源的处理结果
