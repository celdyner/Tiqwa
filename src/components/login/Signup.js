import React, {useState} from 'react'
import "./design.css"
import oops from './oops.png'
import Modal from '../Modal/Modal'
  

const Signup = () => {
   const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [cpassword, setCpassword] = useState("")

  // const [recValue, setRecValue] = useState([])
  // const submitForm = (e) => {
  //   e.preventDefault()
  //   const newValue = { name: name, email: email, password: password, cpassword: cpassword }

  //   setRecValue([...recValue, newValue])
  //   console.log(newValue)
  const hideModal = () => showSuccess(false);
  const [success, showSuccess] = useState(false);

  const hideFailure = () => showFailure(false);
  const [failure, showFailure] = useState(false);

  const submitForm = (e) => {
    e.preventDefault()
    const url = "http://localhost:8080/registerUser/create";
     const newValue = {name, email, password}
 
     
     fetch (url,{
         method:"POST",
         headers:{
             'Content-Type': 'application/json'
         },
         body:JSON.stringify(newValue)
     })
     .then((res) => showSuccess(true))
     .catch((err) => showFailure(true));
 
    setName("")
    setEmail("")
    setPassword("")
  
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
            <p style={{ textAlign: "center" }}>Your Have successfully Created An Account.</p>
           
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





      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              {/* <input type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required /> */}

              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Create an Account Successfully</h1>
                <h3>
                  Name : <p>{cureentValue.name}</p>
                </h3>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
                <h3>
                  Confirm Password : <p>{cureentValue.cpassword}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section> */}
    </>
  )
}



export default Signup