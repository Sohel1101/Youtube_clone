import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
const useSearchVideos = () => {
    const [videos, setVideos] = useState();
    const searchText = useSelector((store) => store.app.searchText)
    useEffect(async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA6BcXw-NXBtDf2UtZtVmsSKARqL8Q_lrU&type=video&part=snippet&maxResults=5&q=${searchText}`
            );
            const data = await response.json();
            setVideos(data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    })
}

export default useSearchVideos