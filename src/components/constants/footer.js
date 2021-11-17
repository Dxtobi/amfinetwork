
import { AiFillFacebook, AiFillTwitterCircle, AiOutlinePaperClip, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = ({auth, app}) => {
   


    return (
        <div className='footer'>
            <div className='footer_block'>
                <div className='footer_container'>
                    <div className='email_div'>
                        <input className='email_input' type='email' placeholder='info@amfinetwork.com' value='' />
                        <button className='email_btn'>JOIN</button>
                    </div>

                    <div className='social_media'>
                        <Link to='' className='social_media_item'>
                            <AiFillFacebook />
                            <h4>FACEBOOK</h4>
                        </Link>
                        <Link to='//https://www.https://twitter.com/AmfiNetwork' className='social_media_item'>
                            <AiFillTwitterCircle />
                            <h4>TWITTER</h4>
                        </Link>
                        <Link to='/newsletter' className='social_media_item'>
                            <AiOutlinePaperClip/>
                            <h4>NEWSLETTER</h4>
                        </Link>
                        <Link to='/home' className='social_media_item'>
                            <AiFillYoutube />
                            <h4>YOUTUBE</h4>
                        </Link>
                    </div>
                </div>
                <h1 style={{color: 'white', marginBottom: 10, marginTop:100}}>
                    JOIN THE COMMUNITY
                </h1>
                <h3 style={{color: 'white'}}>Amfi Network Limited
                    Our Commitment is to rebuild Nigeria and Sub-Sahara Africa</h3>
                
                <h5 style={{color: 'white', marginTop:150 }}>© Amfi Network Limited</h5>
                <div style={{ marginTop: 30 }}>
                    <img style={{width: 80, height: 80}} alt='' src='/logoa.png'/>
                </div>
            </div>
        </div>
    )
}
  
export default Footer