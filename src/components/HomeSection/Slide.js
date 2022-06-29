import React, {useState} from "react"
import  Data from "./Data"
  
 const Slide = ( {slides} ) => {


    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
        }

        if(!Array.isArray(slides) || slides.length <= 0) {
            return null
        }  


          

  return (

    




    <>
    <section className='slider'>
       <div className='control-btn'>
        
            <button className='prev' onClick={prevSlide}>
                <i className='fas fa-caret-left' ></i>
            </button>
            <button className='next' onClick={nextSlide}  >
                <i className='fas fa-caret-right' ></i>
            </button>
        </div>


    

    {Data.map((slide, index) => {

        return (

            <div className = {index === current ? "slide active" : "slide"} key={index}> 
            {index === current && <img src={slide.images} alt= 'Home Image' />}
            
            </div>
        )



    })}
    </section>


    <section className="slide-form">

        <div className="container">
            <h2>Book An Appointment</h2>
                <span>Shedule An Appointment With Our Expert Doctors</span>

                <form action="">
                    <div className="flex_space">
                        <input type="text" name="name"  id="fullname" placeholder="Enter Your Name"  required />
                        <input type="email" c name="email" id="email" placeholder="Enter A Valid Email" required />
                    </div>
                        
                         
                        <div className="flex_space">
                        <input type="tel"  name="phone" id="phone"  placeholder="Enter a Valid Phone Number"  required/>
                        <select name="gender" id="gender" required >
                                <option value="">Select Gender</option>
                                <option value="Female">Male</option>
                                <option value="Male">Female</option>
                                </select>
                            
                        </div>
                    
                    <div className="flex_space">
                        <input type="date" name="dob"  id="dob" required />

                        <select name="location" id="location"  required>
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

                    <div className="flex_space">
                    <input type="date" name="appointmentdate"  id="appointmentdate" placeholder="Appointment Date"  required />
                    
                     <select name="department" id="unit" required>
                              <option value="">Select</option>
                              <option value="Doctor">Choose for me</option>
                              <option value="Cardiologist">Cardiology</option>
                              <option value="Radiologist">Clinical Radiology</option>
                              <option value="Dental">Dentistry</option>
                              <option value="Gynaecologist">Gynaecology</option>
                              <option value="Ophthalmologist">Ophthalmology</option>
                              <option value="Optometrist">Optometry</option>
                              <option value="Paediatrician">Paediatry</option>
                              <option value="Pathologist">Pathology</option>
                              <option value="Physiotherapist">Physiotheraphy</option>
                              <option value="Psychiatrist">Psychiatry</option>
                              <option value="Surgeon">Surgery</option>
                        </select>
                    </div>

                    <textarea  name="message" id="message" rows="5" placeholder="Further Description of the symptoms (Optional)"></textarea>
                    <input value="Book An Appointment"  className="submit" id="btn_submit" type="submit" />

                </form>
        </div>
            

    </section>
    </>
  )
}



export default Slide