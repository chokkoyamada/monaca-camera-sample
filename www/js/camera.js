function takePhoto() {            
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        correctOrientation: true,
        saveToPhotoAlbum: false,
      });
}

function onSuccess (imageURI) {
    var image = document.createElement('img');
    image.src = imageURI;
    image.width = 100;
    image.height = 100;
    
    var imageBox = document.getElementById('imageBox');
    imageBox.appendChild(image);
}

function onFail (message) {
    alert('エラーが発生しました: ' + message);
}

function cleanup() {
    document.getElementById('imageBox').innerHTML = '';
    navigator.camera.cleanup( onCleanupSuccess, onCleanupFail);
    function onCleanupSuccess() {}
    function onCleanupFail(message) {}
}

document.addEventListener("DOMContentLoaded", function() {
    var takePhotoButton = document.getElementById('takePhoto');
    takePhotoButton.addEventListener('click', takePhoto, false);
    var cleanUpButton = document.getElementById('cleanup');
    cleanUpButton.addEventListener('click', cleanup, false);
});