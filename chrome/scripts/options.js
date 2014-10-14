function save_options() {
  var posts = document.getElementById('posts').checked;
  var messages = document.getElementById('messages').checked;
  chrome.storage.sync.set({
    posts: posts,
    messages: messages
  }, function() {
    var status = document.getElementById('status');
    status.style.opacity = 1;
    setTimeout(function() {
      status.style.opacity = 0;
    }, 1000);
  });
}
function restore_options() {
  chrome.storage.sync.get({
    posts: true,
    messages: false
  }, function(items) {
    document.getElementById('posts').checked = items.posts;
    document.getElementById('messages').checked = items.messages;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);