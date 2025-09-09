var posts=["2025/09/08/vmware/","2025/01/14/一些个人认为有用的资源/","2025/01/13/Arch Linux 虚拟机安装指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };