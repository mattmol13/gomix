var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://i.reddituploads.com/1ff9c413ef974565a5e0a2cc106f31b8?fit=max&h=1536&w=1536&s=75aed0f691e94e0031cc84b326a1d240') {
    myImage.setAttribute ('src','http://i.imgur.com/0kcD19O.png');
  } else {
    myImage.setAttribute ('src','https://i.reddituploads.com/1ff9c413ef974565a5e0a2cc106f31b8?fit=max&h=1536&w=1536&s=75aed0f691e94e0031cc84b326a1d240');
  }    
}