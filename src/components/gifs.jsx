import React, { useState } from 'react'
const GYPHY_API_KEY = "jwAgVcSRLXDessKATxYwfMOlS9twe6AX"
export default function Gifs({fact}) {
    const [giphy, setgiphy] = useState("")

    async function giphyRequest() {
       const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GYPHY_API_KEY}&q=${fact}&limit=25&offset=0&rating=g&lang=en`)
       const response = await request.json()
       const giphyUrl = response?.data[0].images.original.url
       console.log(giphyUrl);
       console.log(response.data[0].images.original.url);
       setgiphy(giphyUrl)
    //    console.log(gyphySlice.url.images.downsized.url);
    }
    giphyRequest()
  return (
    <div>
    {/* <iframe src={gyphySlice.url.images.downsized.url}></iframe> */}
        <img src={giphy}></img>
    </div>
  )
}
