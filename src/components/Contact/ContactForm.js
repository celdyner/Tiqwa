import React, {useState} from "react";
import  "./Contact.css";
import Modal from "../Modal/Modal";
import oops from './oops.png';

const ContactForm = () => {
const [fullname, setFullname] = useState("");
const [patientID, setPatientID] = useState("");
const [review, setReview] = useState("");
const [reviewMessage, setReviewMessage] = useState("");



const hideModal = () => showSuccess(false);
  const [success, showSuccess] = useState(false);

  const hideFailure = () => showFailure(false);
  const [failure, showFailure] = useState(false);




// const [allValue, setAllValue] = useState([])

const submitForm = (e) => {
   e.preventDefault()
    const newValue = {fullname, patientID, review, reviewMessage}
    console.log(newValue)
    //setAllValue([...allValue, newValue])
    fetch("https://prod-249.westeurope.logic.azure.com:443/workflows/8a9800dc14244ec193a47dfcc6ae2b13/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FitsdPxOyqNvPmBbL4SJ6msFHrNZvosni485wQ-pdh0",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newValue)
    })
    .then(res => showSuccess(true))
    .catch((err) => showFailure(true));

setFullname("");
setPatientID ("");
setReview  ("");
setReviewMessage ("");

}


  return (

    <>
          <section style={{ top: "70%" }} className="slide-form">
        {success && (
          <Modal onClose={hideModal}>
            <img style={{ display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width:"50%"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcf-Obg_nD_jv0WV0b9aJCZ0m-eWG-DqEPBw&usqp=CAU" alt="Success"></img>
            <h2 style={{ textAlign: "center" }}>Thank You</h2>
            <p style={{ textAlign: "center" }}>Your Feedback has been sent successfully.</p>
           
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
            <p  style={{ textAlign: "center" }} >Your Feedback was not Successful.</p>
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
          <h2 style={{ textAlign: "center" }}>Patient Feedback</h2>
         
          <form onSubmit={submitForm}>
            <div className="flex_space">
              <div className="form-control">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Surname First"
                  required
                />
              </div>
              <div className="form-control">
                <label> Appointment ID</label>
                <input
                  type="patientID"
                  name="patientID"
                  value={patientID}
                  onChange={(e) => setPatientID(e.target.value)}
                  placeholder="Enter Your Appointment ID"
                  required
                />
              </div>
            </div>

            <div className="flex_space">
             
              <div className="form-control">
                <label>Review</label>
                <select
                  name="review"
                  className="mygender"
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                >
                  <option value="">Choose One</option>
                  <option value="verySatisfied">Very Satsisfied</option>
                  <option value="satisfied">Satisfied</option>
                  <option value="notSatisfied">Not Satisfied</option>
                </select>
              </div>
            </div>

            
             

            <textarea
              name="reviewMessage"
              rows="5"
              placeholder="Message (Optional)"
              value={reviewMessage}
              onChange={(e) => setReviewMessage(e.target.value)}
            ></textarea>
            <input
              value="Book An Appointment"
              className="submit"
              type="submit"
            />
          </form>
        </div>
      </section> 

    </>
   
    
  )
}

export default ContactForm