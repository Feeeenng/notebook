项目地址：https://github.com/thedotmack/claude-mem

项目说明：过自动捕获工具使用情况观察结果、生成语义摘要并将其提供给后续会话，从而无缝地保留会话之间的上下文信息。这使得 Claude 即使在会话结束或重新连接后也能保持对项目的持续了解。

# 安装方法
```bash

/plugin marketplace add thedotmack/claude-mem

/plugin install claude-mem
```


# 使用方法

https://docs.claude-mem.ai/usage/search-tools#the-3-layer-workflow

claude-mom 采用三层决策方式

search --> timeline --> get_observations 

通过先 **搜索** 、**查询背景** 、 **获取结果** 流程来完成上下文的共享


## search

https://docs.claude-mem.ai/usage/search-tools#search-search-memory-index

## timeline

https://docs.claude-mem.ai/usage/search-tools#timeline-get-chronological-context


## get_observations

https://docs.claude-mem.ai/usage/search-tools#layer-3-get-observations-details


# 例子测试

场景1：找出数据库连接问题
```
Step 1: search(query="error database connection", type="bugfix", limit=10)
 → Review index, identify observations #245, #312, 

#489 Step 2: timeline(anchor=312, depth_before=3, depth_after=3) 
→ See what was happening around the fix 

Step 3: get_observations(ids=[312, 489]) 
→ Get full details on relevant fixes
```


场景2：恢复上下文

```
Step 1: search(query="project-name", limit=10, orderBy="date_desc")
  → See recent work

Step 2: timeline(anchor=<most_recent_id>, depth_before=10)
  → Understand what led to current state

Step 3: get_observations(ids=[<critical_observations>])
  → Refresh memory on key decisions
```

