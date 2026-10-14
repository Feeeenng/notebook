
# 安装
 
安装文档：
https://kthena.volcano.sh/docs/next/getting-started/installation

安装版本：v1.0.0
默认安装  controller-manager  kthena-router 这里采用helm离线安装

```
# 离线下载最新安装包 
# curl -L -o kthena.tgz https://github.com/volcano-sh/kthena/releases/latest/download/kthena.tgz

# helm install kthena kthena.tgz --namespace kthena-system --create-namespace
NAME: kthena
LAST DEPLOYED: Wed Oct 14 10:46:20 2026
NAMESPACE: kthena-system
STATUS: deployed
REVISION: 1
TEST SUITE: None

# 查看状态
[root@ecs-0001 zjf]# kubectl get -n kthena-system po
NAME                                         READY   STATUS    RESTARTS   AGE
kthena-controller-manager-85cbb6cb8b-vjx5f   1/1     Running   0          6m49s
kthena-router-6595f4df9b-pvjzb               1/1     Running   0          6m49s
[root@ecs-0001 zjf]# 
```

