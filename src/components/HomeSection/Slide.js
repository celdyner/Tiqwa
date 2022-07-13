import React, { useState, useEffect } from "react";
import Data from "./Data";
import Modal from "../Modal/Modal";
import oops from './oops.png';

const Slide = ({ slides }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [appointmentdate, setAppointmentdate] = useState("");
  const [unit, setUnit] = useState("");
  const [message, setMessage] = useState("");


  const hideModal = () => showSuccess(false);
  const [success, showSuccess] = useState(false);

  const hideFailure = () => showFailure(false);
  const [failure, showFailure] = useState(false);


  useEffect(() => {
    var date = new Date();
    var tdate = date.getDate();
    if (tdate < 10) {
        tdate = '0' + tdate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var year = date.getFullYear();
    var minDate = year + '-' + month + '-' + tdate;
    document.getElementById('appointmentdate').setAttribute('min', minDate)
    document.getElementById('appointmentdate').value = minDate
  }, [])

  

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const submitForm = (e) => {
    e.preventDefault();
    const newValue = {
      fullname,
      email,
      phone,
      gender,
      dob,
      location,
      appointmentdate,
      unit,
      message,
    };

    //Connect to SharePoint List
    fetch(
      "https://prod-23.westeurope.logic.azure.com:443/workflows/2e24de8ada3941f094f0607abaa17307/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OG8TwKnPcC4V2zftbu8HW4bJtBr_STV9X0NhjFrG4fM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newValue),
      }
    )
      .then((res) => showSuccess(true))
      .catch((err) => showFailure(true));

    setFullname("");
    setEmail("");
    setPhone("");
    setGender("");
    setDob("");
    setLocation("");
    setAppointmentdate("");
    setUnit("");
    setMessage("");
  };

  return (
    <div className="container">
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.images} alt="doctors" />}
            </div>
          );
        })}
      </section>

      <section className="slide-form">
        {success && (
          <Modal onClose={hideModal}>
            <img style={{ display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width:"50%"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcf-Obg_nD_jv0WV0b9aJCZ0m-eWG-DqEPBw&usqp=CAU" alt="Success"></img>
            <h2 style={{ textAlign: "center" }}>Thank You</h2>
            <p style={{ textAlign: "center" }}>Your Appointment request has been sent successfully.</p>
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
            <p  style={{ textAlign: "center" }} >Your Appointment was Declined.</p>
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

        
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Book An Appointment</h2>
          <span className="schedule">Shedule An Appointment With Our Doctors</span>

          <form onSubmit={submitForm}>
            <div className="flex_space">
              <div className="form-control">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-control">
                <label> Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter A Valid Email"
                  required
                />
              </div>
            </div>

            <div className="flex_space">
              <div className="form-control">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{11}"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label>Gender</label>
                <select
                  name="gender"
                  className="mygender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Male</option>
                  <option value="Male">Female</option>
                </select>
              </div>
            </div>

            <div className="flex_space">
              <div className="form-control">
                <label>Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label>Location</label>
                <select
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Agege">Agege</option>
                  <option value="Alimosho">Alimosho</option>
                  <option value="Apapa">Apapa</option>
                  <option value="Ifako-Ijaye">Ifako-Ijaye</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Kosofe">Kosofe</option>
                  <option value="Mushin">Mushin</option>
                  <option value="Oshodi-Isolo">Oshodi-Isolo</option>
                  <option value="Shomolu">Shomolu</option>
                  <option value="Eti-Osa">Eti-Osa</option>
                  <option value="Lagos Island">Lagos Island</option>
                  <option value="Lagos Mainland">Lagos Mainland</option>
                  <option value="Surulere">Surulere</option>
                  <option value="Ojo">Ojo</option>
                  <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
                  <option value="Amuwo-Odofin">Amuwo-Odofin</option>
                  <option value="Badagry">Badagry</option>
                  <option value="Ikorodu">Ikorodu</option>
                  <option value="Ibeju-Lekki">Ibeju-Lekki</option>
                  <option value="Epe">Epe</option>
                </select>
              </div>
            </div>

            <div className="flex_space">
              <div className="form-control">
                <label> Appointment Date</label>
                <input
                  type="date"
                  name="appointmentdate"
                  placeholder="Appointment Date"
                  value={appointmentdate}
                  onChange={(e) => setAppointmentdate(e.target.value)}
                  id="appointmentdate"
                  required
                />
              </div>

              <div className="form-control">
                <label>Department</label>
                <select
                  name="department"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  required
                >
                  <option value="">Select (Option)</option>

                  <option value="Cardiology">Cardiology</option>
                  <option value="Dentistry">Dentistry</option>
                  <option value="Gynaecology">Gynaecology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Paediatry">Paediatry</option>
                  <option value="Physiotheraphy">Physiotheraphy</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Doctor">Choose for me</option>
                </select>
              </div>
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Further Description of the symptoms (Optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input
              value="Book An Appointment"
              className="submit"
              type="submit"
            />
          </form>
        </div>
      </section>
      
    </div>
    
  );
};

export default Slide;
