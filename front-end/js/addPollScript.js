$(function () {
    let pollSettings = {
        title: ""
    };
    $("#openPollSettingsButton").on("click", function () {

        $("#alternative-poll-window").css("display", "block");
        $("#alternative-poll-window").css("zIndex", "4");
        $("#carousel-module").css("zIndex", "2");
    });

    // $("body").on("click", function () {
    //     $("#alternative-poll-window").css("display", "none");
    //     $("#alternative-poll-window").css("zIndex", "2");
    //     $("#carousel-module").css("zIndex", "4");
    // })

    $("#addPollButton").on("click", function () {
        window.open("mainPoll.html");
        pollSettings.title = $("#ain-theme__input").val();
    });

    $("#closePollSettingsButton").on("click", function () {
        $("#poll-window").css("display", "none");
        $("body").css("backgroundColor", "white");
        // $("#poll-window").css("backgroundColor", "white");
    })


});