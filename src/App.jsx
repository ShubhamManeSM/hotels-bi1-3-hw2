// import './App.css'
import AddHotelForm from "./components/AddHotelForm"
import HotelByTitle from "./components/HotelByTitle"
import Hotels from "./components/Hotels"

function App() {
  return (
    <div>
      <AddHotelForm />
      <Hotels />
      <HotelByTitle title={"New Hotel"} />
    </div>
  )
}

export default App
