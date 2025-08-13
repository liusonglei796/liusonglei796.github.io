var posts=["2025/01/13/Arch Linux 初始网络配置指南/","2025/01/13/Arch Linux 虚拟机安装指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };