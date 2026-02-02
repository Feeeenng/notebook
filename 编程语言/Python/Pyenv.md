---
tags:
  - python
  - pyenv
---
一个 Python 多版本环境管理工具  
文档地址：https://github.com/pyenv/pyenv
# 安装

## 步骤一：安装软件
```
curl -fsSL https://pyenv.run | bash
```

步骤二：配置环境变量
> 默认采用bash方式 
```
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init - bash)"' >> ~/.bashrc
```


# 优化使用

## 添加缓存目录


```bash
[root@cmom cache]# echo $PYTHON_BUILD_CACHE_PATH
[root@cmom cache]# export PYTHON_BUILD_CACHE_PATH=/root/.pyenv/cache
[root@cmom cache]# echo $PYTHON_BUILD_CACHE_PATH
/root/.pyenv/cache
[root@cmom cache]# cd /root/.pyenv/cache
[root@cmom cache]#
[root@cmom cache]#
[root@cmom cache]# pyenv install 3.6.8
Installing Python-3.6.8...
```