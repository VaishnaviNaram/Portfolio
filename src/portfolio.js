let span3 = document.getElementById('span3');
let button3 = document.getElementById('btn3');
function scrollToBottom() {
    window.scrollBy({
        top: 1000, 
        behavior : "smooth"});
}
span3.onclick = function(){
    scrollToBottom();
};
button3.onclick = function(){
    scrollToBottom()
};
