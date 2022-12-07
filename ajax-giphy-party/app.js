console.log("Let's get this party started!");

const $canvas = $("#canvas");
const $input = $("#search");

function randomGif(res) {
  let result = res.data.length;
  if (result) {
    let randomIdx = Math.floor(Math.random() * result);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $canvas.append($newCol);
  }
}

$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let keyword = $input.val();
  $input.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: keyword,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  randomGif(response.data);
});

// remove button
$("#remove").on("click", function () {
  $canvas.empty();
});
