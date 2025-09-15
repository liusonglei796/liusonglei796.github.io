var posts=["2025/01/13/Arch Linux 虚拟机安装指南/","2025/09/14/new-article/","2025/09/14/新文章/","2025/09/08/vmware/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };