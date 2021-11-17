
import {Link } from 'react-router-dom';

const data = [
    {
        header: 'REAL ESTATE DEVELOPMENT, REGENERATION & CONSTRUCTION',
        preText:`A private infrastructure industry is emerging with
        a simple message to the public agencies that have traditionally dominated the industry: allow us to provide a complete package of development services and we will deliver the facilities needed in less time and at little or no cost to the treasury.
        The pitch is compelling.`,
        img:`1.png`
    },
    {
        header: 'OUR AGRIBUSINESS VALUE CHAIN AND INTEGRATED FARMING MODEL',
        preText:`Food Insecurity in Africa and Nigeria
        Africa as a whole cannot currently feed itself; its share of world trade has halved in a generation.`,
        img:`mag.png`
    },
    {
        header: 'OIL AND GAS SECTOR',
        preText:`As a company we are simple but extremely ambitious. We are ambitiously looking at joining the ranks of indigenous independent Upstream and Downstream production oil companies in Nigeria and Africa with a vision to power Africa’s emerging and growing oil and gas sector. To achieve this, we are implementing ambitious investment partnership programmes across the entire petroleum value chain.`,
        img:`10.png`
    },
    {
        header: 'OUR CORPORATE, MICRO FINANCE AND MANAGEMENT STRATEGY',
        preText:`AMFI NETWORK Limited is a firm specialising in Corporate, Project and Trade financing at all levels from $500,000 to over $500million through her Technical Finance Partners.`,
        img:`11.png`
    },
    {
        header: 'OUR RENEWABLE ENERGY STRATEGY',
        preText:`Amfi Network Limited in collaboration with its Technical and Financial Partners, ROLT INTERNATIONAL initiate and create partnerships in the electricity, development, training and commodity sectors in Africa. `,
        img:`5.png`
    },
    {
        header: 'ECONOMIC SUMMITS, CONFERENCES, WORKSHOPS AND TRAINING STRATEGY',
        preText:`Background
        At the 2000 Millennium Summit, 189 Member States of the United Nations endorsed theMillennium Development Goals (MDGs) as a framework to fight poverty and to accelerate
        Human  Development. `,
        img:`8.png`
    }
]

const Home = () => {
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
                <div className='read_container'>
                {
                    data.map((d, i) => {
                        return (
                            <div className='read_container_item'>
                                <div className='read_container_text'>
                                    <h2 className='read_container_text_header'>{d.header}</h2>
                                    <div>
                                       {d.preText}
                                    </div>
                                    <Link to={'/topics'+i}className='read_more_link'>Read More</Link>
                                </div>
                                    <div className='read_container_image'>
                                    <img className="rd_img" alt='' src={d.img}/>
                                    </div>
                            </div>
                        )
                    })
                    }
                </div>
        </div>
    )
}
  
export default Home