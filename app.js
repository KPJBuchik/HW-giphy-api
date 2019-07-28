


var gifCategories = ["cat", " incredulous Jaguar Fan", "gil", "360 no scope", "table magic trick"]


//displays gifs 
function displayGifs() {
    $(".gif-viewholder").empty();

    var gifCategories = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifCategories + "&api_key=8rPpM28WAsVUHRzd7O91Q9vpYLSMlFQe";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {
            var gifDiv = $("<div>")
            var rating = response.data[i].rating;



            var ratingDisplay = $("<p>").text(rating);
            var animatedGif = response.data[i].images.fixed_height.url;
            var stillGif = response.data[i].images.fixed_height_still.url;

            //makes still possible
            var gifDisplay = $("<img class='allgifs'>")
            gifDisplay.attr("src", stillGif);
            gifDisplay.attr("data-still", stillGif)
            gifDisplay.attr("data-animate", animatedGif)
            gifDisplay.attr("data-state", "still")


        }

    });
};



function display() {




}


function 



/*
$("#buttons").on("click", function () {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
$.ajax({
    url: queryURL,
    method: "GET"})
    var gif = $(this).attr("data-name")
    function displayGifs() {
        $("gifview-holder").img(response)
            .then(function (response) {
                var imageUrl = response.data.image_original_url;
                var gifDisplay = $("<img>");
                gifDisplay.attr("src", imageUrl)
            $("#images").prepend(catImage)
            }
        }*/