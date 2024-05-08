document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('proxyForm');
    var frame = document.getElementById('proxyFrame');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var urlInput = document.getElementById('urlInput').value;
        if (urlInput.trim() !== '') {
            frame.src = 'https://cors-anywhere.herokuapp.com/' + urlInput;
        }
    });
});
