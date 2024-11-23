var index = 0;

function colorChange(){
    var colors = ['yellow', 'brown', 'blue', 'green', 'red'];
    document.getElementsByTagName('body')[0].style.background = colors[index++];

    if(index > colors.length -1)
        index = 0;
}