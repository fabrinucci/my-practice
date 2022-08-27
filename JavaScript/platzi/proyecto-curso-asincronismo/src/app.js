const contentSelector = null || document.querySelector('#content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '047e74a508msh7482311737874eap16d8e7jsnb4570dc11246',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const API_URL = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCoGDh1Xa3kUCpok24JN5DKA&part=snippet%2Cid&order=date&maxResults=10';

const dataFetch = async (urlApi) => {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async() => {
  try {
    const videos = await dataFetch(API_URL);
    let view = `
    ${ videos.items.map( video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${ video.snippet.thumbnails.high.url }" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
      `
    ).slice(0,4).join('')}
    `
    contentSelector.innerHTML = view;   
    

  } catch (error) {
    console.log(error);
  }
})()