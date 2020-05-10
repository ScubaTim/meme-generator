export async function getMeme() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json()
    return data
}
getMeme().then(data => {
    const url = JSON.stringify(data.data.memes[0].url)
    //URL shows up perfectly when console logged from here, but not anywhere else. :C
    return url
})