import React,{useState, useEffect}  from "react"
import "./Gallery.css"
import GalleryCard from "./GalleryCard"


const Gallery = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 useEffect(() => {
  fetch("http://localhost:8080/hotel")
  .then((res) => res.json())
  .then(
  
  (result) => {
      setData(result.data.hotel);
      setLoading(false);
  
  },
  (error) => {
    console.log("Error fetching data: ", error);
    setError(error);
  }
  );

  
 }, [])

 if (loading) return "loading";
 if (error) return "Error";

  return (
    <>

      <section className='gallery top'>
        <div className='container grid'>
        
      
          {data.map(el => (
            <GalleryCard image={el.image} hotelName={el.hotelName} price={el.price} />
          )
          )}
        
        </div>
      </section>
    </>
  )

  } 



export default Gallery