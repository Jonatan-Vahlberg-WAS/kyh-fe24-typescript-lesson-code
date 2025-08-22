import { useEffect, useState } from "react";

export default function PhotoList() {
   const [photos, setPhotos] = useState<Photo[]>([])
    
  const getPhotos = async () => {
    console.log("Getting photos from API");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=20",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.ok){
        const data: Photo[] = await response.json()
        setPhotos(data)
      }
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
