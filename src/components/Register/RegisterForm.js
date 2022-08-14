import React, {useState} from "react";
import  "./Register.css";
import Modal from "../Modal/Modal";
import oops from './oops.png';

const RegisterForm = () => {
const [hotelName, setHotelName] = useState("");
const [noOfRoom, setNoOfRoom] = useState("");
const [state, setState] = useState("");
const [address, setAddress] = useState("");
const [hotelManagerName, setHotelManagerName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [price, setPrice] = useState("");
// const [roomType, setRoomType] = useState("");
const [image, setImage] = useState("");



const hideModal = () => showSuccess(false);
  const [success, showSuccess] = useState(false);

  const hideFailure = () => showFailure(false);
  const [failure, showFailure] = useState(false);






const submitForm = (e) => {
   e.preventDefault()
   const url = "http://localhost:8080/hotel/create";
    const newValue = {hotelName, noOfRoom, state, address,hotelManagerName,phone,email,image,price}

    
    fetch (url,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newValue)
    })
    .then((res) => showSuccess(true))
    .catch((err) => showFailure(true));

setHotelName("");
setNoOfRoom("");
setState("");
setAddress("");
setHotelManagerName("");
setPhone("");
setEmail("");
setImage("");
setPrice("");
// setRoomType("");
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
            <p style={{ textAlign: "center" }}>Your Hotel Registration has been sent successfully.</p>
           
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
            <p  style={{ textAlign: "center" }} >Your Registration was not Successful.</p>
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

        
    
          <h2 style={{ textAlign: "center" }}>Register Your Hotel With Us</h2>
         
          <form onSubmit={submitForm}>
            
            <input
              type="text"
              name="hotelName"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              placeholder="Hotel Name"
              required
            />

         <input type="text" name="noOfRoom"  value={noOfRoom} onChange={(e) => setNoOfRoom(e.target.value)} placeholder="No Of Room" required />

         <div className="form-control">
                
                <select
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                >
                  <option value="">Select State</option>
                  <option value="Agege">Abia</option>
                  <option value="Alimosho">Adamawa</option>
                  <option value="Apapa">Akwa Ibom</option>
                  <option value="Ifako-Ijaye">Anambra</option>
                  <option value="Ikeja">Bauchi</option>
                  <option value="Kosofe">Bayelsa</option>
                  <option value="Mushin">Benue</option>
                  <option value="Oshodi-Isolo">Borno</option>
                  <option value="Shomolu">Cross River</option>
                  <option value="Eti-Osa">Delta</option>
                  <option value="Lagos Island">Ebonyi</option>
                  <option value="Lagos Mainland">Edo</option>
                  <option value="Surulere">Ekiti</option>
                  <option value="Ojo">Enugu</option>
                  <option value="Ajeromi-Ifelodun">Gombe</option>
                  <option value="Amuwo-Odofin">Imo</option>
                  <option value="Badagry"> Jigawa</option>
                  <option value="Ikorodu">Kaduna</option>
                  <option value="Ibeju-Lekki">Kano</option>
                  <option value="Epe">Kastina</option>
                  <option value="Epe">Kebbi</option>
                  <option value="Epe">Kogi</option>
                  <option value="Epe">Kwara</option>
                  <option value="Epe">Lagos</option>
                  <option value="Epe">Nassarawa</option>
                  <option value="Epe">Niger</option>
                  <option value="Epe">Ogun</option>
                  <option value="Epe">Ondo</option>
                  <option value="Epe">Osun</option>
                  <option value="Epe">Oyo</option>
                  <option value="Epe">plateau</option>
                  <option value="Epe">River</option>
                  <option value="Epe">Sokoto</option>
                  <option value="Epe">Taraba</option>
                  <option value="Epe">Yobe</option>
                  <option value="Epe">Kastina</option>
                  <option value="Epe">Zamfara</option>
                </select>
              </div>
            

              {/* <div className="form-control">
                <label>Type Of Rooms</label>
                <select
                  name="gender"
                  className="mygender"
                  id="gender"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                >
                  <option value="">Select Rooms</option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                </select>
              </div> */}




          {/* <input
              type="text"
              name="location"
              
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Location"
              required
              /> */}


        <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />

<input
              type="text"
              name="hotelManagerName"
              value={hotelManagerName}
              onChange={(e) => setHotelManagerName(e.target.value)}
              placeholder="Hotel Manager Name"
              required
            />


        <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />


        <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />



 
<input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Hotel Image url"
            
            />


<input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price per Night"
              required
            />


       
       
          
 <input
          className="primary-btn"
          value="Register"
          type="submit"
        />
      </form>

        
         

      

        
       
      {/* <div className='side-content'>
            <h3>Visit Our location</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br />

            <h3>Message us</h3>
            <span>info@exampal.com</span>
            <br />
            <span>+01 123 456 789</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>  */}

     
    </>
   
    
  )
}

export default RegisterForm