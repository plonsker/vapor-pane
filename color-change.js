var colors = ['#c6acc9', '#ecb4bf', '#fdd6b5','#fdf3b8','#a7e4ae','#bfffe6', '#8699d1', '#dba9ce', '#aae7e8', '#efe6eb', '#47d1d5', '#e8d2ff', '#c1d1fd', '#d9e0fc', '#ffe0f1','purple'];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 5000);
