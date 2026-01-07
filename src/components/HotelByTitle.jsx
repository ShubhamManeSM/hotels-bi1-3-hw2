import useFetch from "../useFetch";

const HotelByTitle = ({title}) => {
  const {data, loading} = useFetch(`https://hotels-api-rosy.vercel.app/hotels${title}`)

  // console.log(data)

  return(
    data ? <div>
      <h2>{data[0].name}</h2>
      <p><strong>Location: </strong>{data[0].location}</p>
      <p><strong>Rating: </strong>{data[0].rating}</p>
      <p><strong>Price Range: </strong>{data[0].priceRange}</p>
    </div> : loading && <p>Loading...</p>
  )
}

export default HotelByTitle;