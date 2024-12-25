async function RandomJoke() {
  try {
    let Joke = document.getElementById("joke");
    let GetJoke = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"
    );
    let newjoke = await GetJoke.json();

    Joke.innerHTML = newjoke.joke;
    console.log(newjoke);
    

    const jokeCategories = {
      Programming:
        "url(https://i.guim.co.uk/img/media/d059b58efe8ce50d15639f76448becdeec69bc9b/0_184_7200_4320/master/7200.jpg?width=1200&quality=85&auto=format&fit=max&s=d7659f8cde3870d1724610565247623e)",
      Puns: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIWN7MHsLlKEqqejWVDfBZwV5cz3NvgX2VQ&s)",
      "Dad Jokes":
        "url(https://t3.ftcdn.net/jpg/01/67/26/08/360_F_167260823_ntzcARc5sLWJuP15BCc5Dx7NGWlj8Nrm.jpg)",
      "Knock-Knock":
        "url(https://img.freepik.com/premium-photo/funny-backgrounds-funny-illustrated-faces_860599-18110.jpg)",
      Animals:
        "url(https://t3.ftcdn.net/jpg/07/28/77/66/360_F_728776665_NW7o8fgIAICbEEWXSl9mIvpLBgt68eQj.jpg)",
      Food: "url(https://storage.pixteller.com/designs/designs-images/2019-03-27/05/funny-background-drawing-backgrounds-cartoon-1-5c9b97d1c4d88.png)",
      Work: "url(https://imgv3.fotor.com/images/blog-richtext-image/yellow-smiling-emoji.jpg)",
      School:
        "url(https://wallpapers.com/images/featured/funny-9ngi51dd49q4q24i.jpg)",
      Sports:
        "url(https://wallpapers.com/images/featured/cute-funny-background-3say7jkyxpvbqw2e.jpg)",
      History:
        "url(https://img.freepik.com/free-vector/funny-emoticons-background-design_52683-27759.jpg)",
      Science:
        "url(https://png.pngtree.com/thumb_back/fh260/background/20231005/pngtree-3d-rendering-of-a-background-with-smiling-emoji-image_13555845.png)",
      Technology:
        "url(https://img.freepik.com/free-vector/emoji-summer-background_79603-1589.jpg)",
      Music:
        "url(https://img.freepik.com/free-psd/3d-background-with-modern-emojis_23-2150672283.jpg)",
      Relationship:
        "url(https://c4.wallpaperflare.com/wallpaper/757/84/21/funny-cartoon-yellow-movie-wallpaper-preview.jpg)",
      Movies:
        "url(https://i.pinimg.com/736x/3b/0f/48/3b0f48f6d6a7e223eded46dfdef23f5b.jpg)",
      Random:
        "url(https://live.staticflickr.com/7345/16400221655_a802d6a314_h.jpg)",
    };
    const Jokeback = newjoke.category;
    document.body.style.backgroundImage =
      jokeCategories[Jokeback] || jokeCategories.default;
  } catch (error) {}
}
// RandomJoke()
