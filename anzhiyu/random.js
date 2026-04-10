var posts=["2026/04/10/1Go 语言后台定时任务：从“事故频发”到“工业级稳健”的设计指南/","2025/01/13/Arch Linux 虚拟机安装指南/","2026/04/02/Cloudflare Tunnel 配置指南/","2026/03/01/DeepSeek关于编程与AI的QA/","2026/03/19/Go语言实习面试问题复盘/","2025/09/08/vmware/","2025/09/14/new-article/","2025/09/14/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };