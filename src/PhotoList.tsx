import { useEffect, useState } from "react";
import ApiService from "./utils/ApiService";

export default function PhotoList() {
   const [photos, setPhotos] = useState<Photo[]>([])
    
  const getPhotos = async () => {
    console.log("Getting photos from API");
    const photoApiService = new ApiService<Photo>('photos')
    try {
      const photos = await photoApiService.getList()
      setPhotos(photos)
      // const photo1 = await photoApiService.getDetail(222)
      // const photo2 = await photoApiService.getDetail(222222)
      // console.log("PHOTO", photo1)
      // console.log("PHOTO2", photo2)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.warn("error fetching photos", error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return <div className="photo-list">
    {photos.map(photo => (
        <div className="photo">
            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </div>
    ))}
  </div>;
}
