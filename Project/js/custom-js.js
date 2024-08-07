$(document).ready(function() {
    //import our other html files into our index.html
    $(function () {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    $(".menu").mouseenter(
        function (){
            //mouse enter
            $(this).css('color','#414141')
        },
    );

});