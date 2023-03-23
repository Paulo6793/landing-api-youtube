const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCoGDh1Xa3kUCpok24JN5DKA&part=snippet%2Cid&order=date&maxResults=5';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '983d9c6135msh14b632c1eb9f2a9p1f444cjsn81dcbe9fc77d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
try {
    const videos = await fetchData(API);
} catch (error) {
    let view = `
    ${videos.items.map(videos =>
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${videos.snippet.thumbnail.height.url}" alt="${videos.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${videos.snippet.title}
                    title
                </h3>
            </div>
        </div>
    `).silece(0,4).join('')};
})();

fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));