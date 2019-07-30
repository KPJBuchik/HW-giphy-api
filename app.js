

$(document).ready();
var gifCategories = ["cat", " incredulous Jaguar Fan", "gil", "360 no scope", "table magic trick"]


function displayButtons() {
    $(".button-view").empty();

    for (let i = 0; i < gifCategories.length; i++) {

        let newButton = $("<button>")
        newButton.addClass("categories");
        newButton.attr("data-name", gifCategories[i]);
        newButton.text(gifCategories[i])
        $(".button-view").append(newButton);
    }
};
//displays gifs, ajax call to gather data, for loop to display multiple gifs
function displayGifs() {
    $(".gif-viewholder").empty();

    var gifCategories = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifCategories + "&api_key=8rPpM28WAsVUHRzd7O91Q9vpYLSMlFQe";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (let i = 0; i < 24; i++) {
            var gifDiv = $("<div>")
            var rating = response.data[i].rating;

            var ratingDisplay = $("<p>").text(rating);
            var animatedGif = response.data[i].images.fixed_height.url;
            var stillGif = response.data[i].images.fixed_height_still.url;

            //makes still possible
            var gifDisplay = $("<img>")
            gifDisplay.addClass("allgifs")
            gifDisplay.attr("src", stillGif);
            gifDisplay.attr("data-still", stillGif)
            gifDisplay.attr("data-animate", animatedGif)
            gifDisplay.attr("data-state", "still")


            //displays ratings after images
            gifDiv.append(ratingDisplay)
            gifDiv.prepend(gifDisplay)
            $(".gif-viewholder").append(gifDiv)


        }

    });
}

function searchGifs (){






}

//adds buttons through input field 
$("#add-gif").on("click", function (event) {
    event.preventDefault();

    var giphy = $("#gif-input").val().trim();
    displayGifs(giphy)

    gifCategories.push(giphy)
    displayButtons()
});


$(document).on("click", ".categories", displayGifs);
displayButtons();

//pauses gifs 
$(".gif-viewholder").on("click", ".allgifs", function () {
    var dataState = $(this).attr("data-state");

    if (dataState === "still") {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');


    }

})
