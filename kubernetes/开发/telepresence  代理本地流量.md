# 安装

安装 cli

[https://telepresence.io/docs/install/client](https://telepresence.io/docs/install/client)

安装 Traffic Manager

[https://telepresence.io/docs/install/manager](https://telepresence.io/docs/install/manager)

# 使用

## 连接集群

```
telepresence  connect
```

- -n 指定namespace 默认监听default流量

# 获取列表

```
telepresence  list
```

## 拦截服务

```
telepresence  intercept <service-name> --port <local-port>:<remote-port>
```

## 取消拦截

```
telepresence  leave <service-name>
```