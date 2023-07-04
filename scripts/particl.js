// var magic = document.querySelector(".magic"),
//     magicWHalf = $magic.width() / 2;

// const detective = function () {
//     magic.css({
//         "left": e.pageX - magicWHalf,
//         "top": e.pageY - magicWHalf
//     });
// }
$(document).ready(function () {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function (e) {
        $magic.css({
            "left": e.pageX - magicWHalf,
            "top": e.pageY - magicWHalf
        });
    });
});