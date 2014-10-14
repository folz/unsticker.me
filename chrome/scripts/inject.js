chrome.storage.sync.get(["posts", "messages"],function(obj) {
  if(obj.posts) {
    var link = document.createElement('link'); 
    link.href = chrome.extension.getURL('styles/contentstyles-posts.css');  
    link.type = 'text/css'; 
    link.rel = 'stylesheet'; 
    document.documentElement.appendChild(link); 
  }
  if(obj.messages) {
    var link = document.createElement('link'); 
    link.href = chrome.extension.getURL('styles/contentstyles-messages.css');  
    link.type = 'text/css'; 
    link.rel = 'stylesheet'; 
    document.documentElement.appendChild(link); 
  }
});