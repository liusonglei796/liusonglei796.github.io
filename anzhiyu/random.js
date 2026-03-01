var posts=["2025/09/14/new-article/","2025/01/13/Arch Linux 虚拟机安装指南/","2026/03/01/大模型会不会取代程序员/","2025/09/08/vmware/","2025/09/14/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };