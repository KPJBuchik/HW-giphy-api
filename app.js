



var gifCategories = ["Stupid Sexy Flaners", " incredulous Jaguar Fan", "gil", "360 no scope", , "table magic trick"]

//displays gifs 
function displayGifs() {

    var gifCategories = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifCategories + "&api_key=8rPpM28WAsVUHRzd7O91Q9vpYLSMlFQe";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {





        
        var gifDiv =$("<div class=gif-div-here>")
        var rating = response.Rated;
        var ratingDisplay = $("<p>").text("Rating: " + rating);
        gifDiv.append(ratingDisplay)
        var imageUrl = response.data.image_original_url;

        var gifDisplay = $("<img>").attr("src",imageUrl)

        gifDisplay.attr("src", imageUrl)
        gifDiv.append(gifDisplay)
        $("#gif-viewholder").prepend(gifDiv)

    })

}
    function createButtons() {


        for (let i = 0; i < gifCategories.length; i++) {

            var gifButtons = $("<button>")
            gifButtons.addClass("gif-button")
            gifButtons.attr("data-name", gifCategories[i])
            gifButtons.text(movies[i])
            $("#button-view").append(gifButtons);
        }
    }














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