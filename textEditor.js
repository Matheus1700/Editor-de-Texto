var textField = document.getElementById("text-box")
textField.addEventListener('keydown', autosize);



//Função que faz o 'auto-grow' na textarea
function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = "height:auto; padding:0"
        el.style.cssText = `height:${el.scrollHeight}px`;
    }, 0)
}