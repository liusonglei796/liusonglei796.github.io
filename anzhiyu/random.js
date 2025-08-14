var posts=["2025/01/14/Arch Linux 从终端到桌面/","2025/01/13/Arch Linux 虚拟机安装指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };