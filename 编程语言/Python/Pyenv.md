

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