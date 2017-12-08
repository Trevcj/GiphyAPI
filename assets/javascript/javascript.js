// qArr = [];
q = "spongebob";
queryURL = "https://api.giphy.com/v1/gifs/search?api_key=gwEXzUQbkAp3xqyb0SfU6RFf5y6M7iLw&q="+ q + "&limit=10&offset=0&rating=PG-13&lang=en";

$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(response.data[3].url);

      // "<img src="+respone.data[i].url+"style='width:100%;'"> + '<div class="carousel-caption">' + '<h3>Los Angeles</h3>' + '<p>LA is always so much fun!</p>' + '</div>'

      for (let i = 0; i < response.data.length; i++) {
      	
      	console.log(i);
      	let url = '"' + response.data[i].images.original.url +'"';
      	let title = response.data[i].title;
      	let rating = response.data[i].rating;
      	console.log(url);
      	$("#" + i).html("<img src="+ url + " style='width:100%;'>" + '<div class ="carousel-caption">' + '<h3>' + "Title: " + title + '</h3>' + '<p>' + "Rating: " +rating + '</p>' + '</div>');
      }


    });