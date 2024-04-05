import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx=0;


    const slideForward=()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

    const slideBackward=()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Annie Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one the best decisions I've ever made.
                        The supportive community, state of art facilities and commitnent to academic 
                        exccellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Anton Ericcson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Edusity University stands out as an exceptional institution for higher education
                         due to its commitment to innovative teaching methods, diverse academic programs, 
                         and strong emphasis on practical learning experiences. With experienced faculty members, 
                         state-of-the-art facilities, and a supportive learning environment, Edusity University 
                         equips students with the knowledge, skills, and confidence needed to succeed in their chosen fields.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emma Will</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Edusity University is a top choice for students seeking a quality education because of its 
                        comprehensive curriculum, industry-relevant courses, and focus on preparing graduates for 
                        the demands of the modern workforce. With a reputation for academic excellence, cutting-edge
                         research opportunities, and a vibrant campus community, Edusity University provides a 
                         transformative educational experience that empowers students to achieve their full potential.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Eder Peter</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Edusity University is renowned for its personalized approach to education, offering tailored
                         academic support, mentorship programs, and career development services to help students 
                         thrive academically and professionally. With a strong network of industry partnerships 
                         and internship opportunities, Edusity University ensures that graduates are well-equipped
                          to succeed in competitive job markets and make meaningful contributions to their chosen fields.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
