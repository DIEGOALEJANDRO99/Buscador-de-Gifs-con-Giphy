export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=BT7jFjV0XE8BHwIt8gJM4RxqornnZybZ`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gif;
};
