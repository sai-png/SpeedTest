document.querySelector('button').addEventListener('click',() => {
    var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tokyo_Sky_Tree_2012_%E2%85%A3.JPG',
    downloadSize = 4194304,
    time_start, time_end,
    downloadSrc = new Image();
    time_start = new Date().getTime();
    var cacheImg = "?nn=" + time_start;
    downloadSrc.src = imageLink + cacheImg;
    console.log(downloadSrc);
    downloadSrc.onload = function () {
        time_end = new Date().getTime();
        var timeDuration = (time_end - time_start) / 1000,
        loadedBytes = downloadSize * 8 ;
        totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);
        document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>'
    }
})