
import {Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Client from "./others/customersupport/Client";

/**
 * import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
 */
const Header = () => {
    
   const [menu, showMenu]= useState(false)

    return (
        <div className='header_barner'>
            <div className='header'>
                <Link className='header_Brand' to='/'>A m f i</Link>
                <div className='header_right'>
                    <Link className='header_link' to='/home'>
                        Home
                    </Link>
                    <Link className='header_link' to='/newsletter'>
                        Newsletter
                    </Link>
                    <Link className='header_link'  to='/contact_us'>
                        Contact Us
                    </Link>
                </div>
                
                        <div className={`menu ${menu?'menu-show':''}`}>
                    <div>
                            <button onClick={
                                        ()=>showMenu(!menu)
                                    } className='Menu_link'>
                                    Close
                                    </button>
                            <Link className='Menu_link' to='/home'>
                                Home
                            </Link>
                            <Link className='Menu_link' to='/newsletter'>
                                Newsletter
                            </Link>
                            <Link className='Menu_link'  to='/contact_us'>
                                Contact Us
                            </Link>

                            
                            </div>
                        </div>
                    
                
                <button onClick={
                    ()=>showMenu(!menu)
                } className='header_right_amb'>
                    <FaBars/>
                </button>
                
                <div className='static_page'>
                    <Client/>
                </div>
            </div>
            {/*<Carousel centerSlidePercentage={50}  centerMode={true} showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div className='img_div'>
                    <img alt='' className='img_img' src="/1.png" />
                    <div  className='legend img_cnt_txt'>
                        <h3>OIL AND GAS SECTOR</h3>
                        <div>
                            As a company we are simple but extremely
                            ambitious. We are ambitiously
                            looking at joining the ranks of indigenous
                            independent Upstream and Downstream production
                            oil companies in Nigeria and Africa with
                            a vision to power Africa’s emerging and growing oil
                            and gas sector.
                        </div>
                    </div>
                </div>
                <div className='img_div'>
                    <img alt='' className='img_img' src="/5.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='img_div'>
                    <img alt='' className='img_img' src="/8.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className='img_div'>
                    <img alt='' className='img_img' src="/10.png" />
                    <p className="legend">Legend 4</p>
                </div>
                <div className='img_div'>
                    <img alt='' className='img_img' src="/11.png" />
                    <p className="legend">Legend 5</p>
                </div>
                <div className='img_div'>
                    <img alt='' className='img_img' src="/12b.png" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>*/}
        </div>
    )
}
  
export default Header