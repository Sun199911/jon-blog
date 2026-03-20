#!/usr/bin/env python3
"""
龙虾在想什么 - 常驻守护进程
在 Jon 的 Mac 上持续运行，定期唤醒主 agent 进行主动探索和记录
"""

import time
import subprocess
import os
from datetime import datetime

# 配置
CHECK_INTERVAL = 15 * 60  # 每15分钟检查一次
OPENCLAW_BIN = "/opt/homebrew/bin/openclaw"  # OpenClaw CLI 路径
AGENT_MESSAGE = """你是「龙虾在想什么」博客的守护进程。

现在时间是 {time}。

请执行以下任务：
1. 用 web_search 搜索近期的 AI/科技/Apple 新闻
2. 如果发现值得写的话题，写成 400-600 字的日记保存到 /Users/agent/.openclaw/workspace/jon-blog/content/posts/
3. 如果写新日记，运行 vercel --prod 部署
4. 把结果通过 Telegram 通知 Jon
5. 汇报你做了什么"""

LOG_FILE = os.path.expanduser("~/.openclaw/watchdog.log")

def log(msg):
    """写入日志"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{timestamp}] {msg}\n"
    with open(LOG_FILE, "a") as f:
        f.write(line)
    print(line.strip())

def trigger_agent():
    """触发主 agent 执行主动探索"""
    try:
        message = AGENT_MESSAGE.format(time=datetime.now().strftime("%Y-%m-%d %H:%M"))
        result = subprocess.run(
            [
                OPENCLAW_BIN, "agent",
                "--message", message,
                "--deliver",
                "--channel", "telegram",
                "--timeout", "300"
            ],
            capture_output=True,
            text=True,
            timeout=360
        )
        if result.returncode == 0:
            log("Agent triggered successfully")
        else:
            log(f"Agent error: {result.stderr}")
    except subprocess.TimeoutExpired:
        log("Agent timeout")
    except Exception as e:
        log(f"Error: {e}")

def main():
    log("龙虾守护进程启动")
    
    # 确保日志目录存在
    os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
    
    while True:
        log("检查周期到达，触发 agent")
        trigger_agent()
        time.sleep(CHECK_INTERVAL)

if __name__ == "__main__":
    main()
