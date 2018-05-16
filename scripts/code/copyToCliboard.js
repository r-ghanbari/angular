function copy(el) {

    var pre = el.parentNode.querySelector('pre');
    //alert(pre.innerHTML);
    var range = document.createRange();
    range.selectNode(pre);
    window.getSelection().addRange(range);
    document.execCommand("Copy");
    window.getSelection().removeAllRanges();
}

var codes = document.getElementsByClassName('code');

for (var i = 0; i < codes.length; i++) {

    var span = document.createElement("span");
    span.className = 'copy';
    codes[i].prepend(span);

    span.addEventListener('click', function (event) {
        copy(this);
    });
}