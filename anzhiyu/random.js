var posts=["2025/08/03/hello-world/","2025/08/02/第一篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };