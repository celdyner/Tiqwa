import React, { useState } from "react"
import Modal from "../Modal/Modal"  
import oops from './oops.png'

const GalleryCard = ({ hotelName,noOfRooms,state,address,hotelManagerName,phone,email,image,price }) => {
const InitialData = {
  
  

  name:"",
  email:"",
  phone:"",
  address:"",
  roomType:"",
  noOfRooms:"",
  checkin:"",
  checkout:"",

    
  }

  const submitForm = (e) => {
    e.preventDefault();
    
  fetch(
      "http://localhost:8080/reservation/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(InitialData),
         
      }
    )
      .then((res) => showSuccess(true))
      .catch((err) => showFailure(true));

      console.log(InitialData)

    }


  const [ reservation, setReservation] = useState(InitialData);
  
  const [success, showSuccess] = useState(false);
  const hideModal = () => showSuccess(false);
  
  const [failure, showFailure] = useState(false);
  const hideFailure = () => showFailure(false);



  // const submitForm = (e) => {
  //   e.preventDefault();

  
  //   // const newValue = {
  //   //   fullname,
  //   //   phone,
  //   //   email,
  //   //   address,
  //   //   roomType,
  //   //   noOfRooms,
  //   //   checkin,
  //   //   checkout,
  //   };
    
    
    // fetch(
    //   "https://",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(initialData),
    //   }
    // )
    //   .then((res) => showSuccess(true))
    //   .catch((err) => showFailure(true));

  //   //Connect to API
 

  //   setFullName("");
  //   setPhone("");
  //   setEmail("");
  //   setAddress("");
  //   setRoomType("");
  //   setNoOfRooms("");
  //   setCheckin("");
  //   setCheckout("");
  // };

  
  




  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>

{success && (
          <Modal onClose={hideModal}>
            <img style={{ display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width:"50%"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcf-Obg_nD_jv0WV0b9aJCZ0m-eWG-DqEPBw&usqp=CAU" alt="Success"></img>
            <h2 style={{ textAlign: "center" }}>Thank You</h2>
            <p style={{ textAlign: "center" }}>Your Booking has been sent successfully.</p>
            <p style={{ textAlign: "center" }}>Please Check your Email for further Details.</p>
            <button onClick={hideModal} style={{ backgroundColor: "#0F0BB7" , border:"none" ,
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              MarginLeft:"400px",
              float: "right",
              borderRadius: "10px" }}>
              OK
            </button>
          </Modal>
        )}

        
      {failure && (
          <Modal onClose={hideFailure}>
            <img style={{ display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width:"50%"}} 
              src={oops} alt="Failed"></img>
            <h2 style={{ textAlign: "center",backgroundColor: "red"  }} >OOPS!!</h2>
            <p  style={{ textAlign: "center" }} >Your Hotel Booking was Declined.</p>
            <p style={{ textAlign: "center" }} >Please Check your Internet connection and try again.</p>
            <button onClick={hideFailure} style={{ backgroundColor: "#0F0BB7",
              border:"none" ,
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              MarginLeft:"400px",
              float: "right",
              borderRadius: "10px"
              
              }} >
              OK
            </button>
          </Modal>
        )}


<div className='items'>
        <div className='img'>
          <img src={image} alt='Gallery' />
          <i className='fas fa-image' onClick={toggleModal}></i>
        </div>
        <div className='title'>
          <h3>{hotelName} </h3>
        </div>
        <div className='title'>
          <h3 style={{ color: "aqua" }}>{price} </h3>
        </div>
      </div>
  
      

      {popup && (
        <div className='popup'>
         <div className="popup-content">
          <button onClick={toggleModal}>Close</button>



          <form onSubmit={submitForm}>
          <div className='title'>
            <label style={{ color: "red" }}>{hotelName}</label>
            </div>
                <input
                  type="text"
                  name="name"
                  value={reservation.name}

                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  placeholder="Your Name"
                  required
                />
            

            <div className="flex_space">

            <div className="form-control">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={reservation.email}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  placeholder="Enter A Valid Email"
                  required
                />
              </div>

              <div className="form-control">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={reservation.phone}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  required
                />
              </div>
              
            </div>



            <div className="flex_space">

                
            <div className="form-control">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={reservation.address}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  required
                />
              </div>
                
              <div className="form-control">
                <label>No of Rooms</label>
                <input
                  type="tel"
                  name="noOfRooms"
                  placeholder="Enter Number Room Reservations"
                  value={reservation.noOfRooms}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  required
                />
              </div>
                
                {/* {/* <div className="form-control">
                <label>Type Of Rooms</label>
                <select
                  name="roomType"
                value={reservation.roomType}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  required
                >
                  <option value="">Select Rooms</option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                </select>
              </div> */}
          
              
                  </div>

            <div className="flex_space">

            

              <div className="form-control">
                <label>Check In</label>
                <input
                  type="date"
                  name="checkin"
                  value={reservation.checkin}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                 />
              </div>
          

            
              
            <div className="form-control">
                <label>Check Out</label>
                <input
                  type="date"
                  name="checkout"
                  value={reservation.checkout}
                  onChange={(e) => setReservation({...reservation, [e.target.name]: e.target.value})}
                  required
                />
              </div>
              
          </div>

            
<input
              value="Book Reservation"
              className="submit"
              type="submit"
            />
          </form>
         </div>
        </div>
      )}
    </>
  )
}

export default GalleryCard