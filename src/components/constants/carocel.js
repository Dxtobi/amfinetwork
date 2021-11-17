var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;

const Carol = ()=> {
    
        return (
            <Carousel showArrows={true} >
                <div>
                    <img alt='' src="/public/1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='' src="assets/2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='' src="assets/3.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img alt='' src="assets/4.png" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img alt='' src="assets/5.png" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img alt='' src="assets/6.png" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    
};

export default Carol