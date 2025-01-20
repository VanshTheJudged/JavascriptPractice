//document.ready waits until the document is read then
//only it runs the code
// $("h1").css("color","red");
// //You can skip this code if you are including a script tag just before
// //the closing body tag

// $("h1").click(function(){
//     $("h1").css("color","brown");
// });
// //This below code will select all the buttons on the website
    $("button").click(function(){
        $("h1").css("color","purple");
    });
$(document).keydown(function(event){
    $("h1").text(event.key);
})
// $("document").keypress(function(event){
//     $("h1").text(event.key);
// });
$("button").on("click",function(){
    $("h1").hide();
})