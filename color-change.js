var colors = ['green', 'teal', 'red', 'fuchsia', 'lime', 'blue', 'purple', 'red'];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 5000);
