
export const getImage = async () => {
    try {
        const apiKey = 'SFEGoplJpkyTyvwAtlr9hrLP3ZzPrSJT';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        return url;
    } 
    catch (error) 
    {
        return 'No existe'
    }
}



