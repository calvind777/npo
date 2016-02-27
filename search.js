
FB.api(
    "/search",
    {
        "type": "topic",
        "q": "American Civil Liberties Union of Maine Foundation",
        "fields": "id,name,page"
    },
    function (response) {
      if (response && !response.error) {
        console.log(response);
      }
    }
);

