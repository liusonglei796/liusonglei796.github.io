var posts=["2026/03/01/DeepSeek关于编程与AI的QA/","2025/01/13/Arch Linux 虚拟机安装指南/","2025/09/08/vmware/","2026/03/19/Go语言实习面试问题复盘/","2025/09/14/新文章/","2025/09/14/new-article/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };