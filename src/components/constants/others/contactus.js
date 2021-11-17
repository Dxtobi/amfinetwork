
import { AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai'
import {FaLocationArrow} from 'react-icons/fa'

const ContactUs = () => {
//console.log('called')

    return (
        <div className='parrent_div'>
            <div className='Label_header_container'>
                <h2 className='Label_header'>
                    Amfi Network Limited
                </h2>
                <h5 className='Label_header_comment'>
                    Our Commitment is to rebuild Nigeria and Sub-Sahara Africa
                </h5>
            </div>
            <div className='news_later_container'>
                <h1 className='top_heading'>Contact Us</h1>
                <div className='contact_details'>
                    <div className='contact_details_items'><FaLocationArrow size={40}/><p>Block E, Flat 1, Sky Memorial Complex,
                    Herbert Macauley Way, Wuse Zone 5, FCT- Abuja, Nigeria.</p></div>
                    <div className='contact_details_items'><faTel size={40}/><p>Tel: +234 80 6576 6583, 81 8614 2941</p></div>
                    <div className='contact_details_items'><AiOutlineMail/><p>Email: info@amfinetwork.com</p></div>
                    <div className='contact_details_items'><AiFillTwitterCircle/> <p>Twitter: @AmfiNetwork</p></div>
                </div>
            </div>


        </div>
    )
}
  
export default ContactUs