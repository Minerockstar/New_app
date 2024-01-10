import React, { useState } from 'react'
import logo from './justdailimgae.png'
import {Link} from 'react-router-dom'
import { FaRegBell, FaSearch, FaDownload,FaChevronCircleLeft,FaChevronCircleRight,FaRegCircle  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import {slides} from "./Imagedetails.js"
import {FourImage} from "./Fourimage.js"
import {Product} from "./Produncts.js"
import {SearchData} from "./Searchdetails.js"

const main = ()=>{
  return(
     <Header  searchValue={SearchData}/>
  )
}

const Header = (SearchData) => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <div className='head'>
      <div>
      <Link to='/' ><img src='https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg' alt="image" className='logo'/></Link>
      </div>
      <div className='navbar'>
        <ul>
      <li id=''>
      <Link to='hire' id='listing'>We are Hiring</Link>
      <Link to='investor' id='listing'>Investor Relations</Link>
      <Link to='advertise' id='listing'>Advertise</Link>
      <Link to='list' id='listing'><div id='buz'>BUSINESS</div>Free Listing</Link>
      <Link to='login' ><FaRegBell className='bell'/> <span className='login'>Login / Sign Up</span> </Link>
      </li>
      </ul>
      </div>
      </div>
{/* input */}
      <div className='inputsearch'>
        <div className='bothinputs'>
        <input type="text" placeholder='Mumbai' /><CiLocationOn className="location"/>
        <input type="text" id='searchinput' placeholder='Search your needs' 
        onChange={(e)=>setSearch(e.target.value)}
        /><FaSearch  className='search'/>
        <button>DOWNLOAD APP <FaDownload /></button>
        </div>
      </div>

      {/* slideimage */}
      <div>
        <div className='simage'> 
        <Headers  data={slides }  datas={FourImage} productdetail={Product} />
       
        </div>
      </div>
      <div className='freebtn'>
        
        <button>Free Listing</button>
        <button>Advertise</button>
      </div>
      <div>
        {
          SearchData && SearchData.filter((getValue)=>{
            if(search === ''){
              return getValue
            }
            else if(getValue.title.toLowerCase().includes(search.toLowerCase())){
              return getValue
            }
             })
        }
      </div>
      
    </div> 
  )
}

const Headers = ({data,datas,productdetail}) =>{
  
  const [slide, setSlide] = useState(0)

  
  
  const nextSlide = ()=>{
       setSlide(slide === data.length -1 ? 0 : slide +1)
       
  }
  const prevSlide = ()=>{
        setSlide(slide ===  0 ? data.length -1 : slide -1)
  }
  
// console.log(data);
    return(
      
      <div>

      <div className='slidesimgesall'>

        <div className='slideimage'>
        <FaChevronCircleLeft className='lefticon' onClick={prevSlide}/>
        
         {
          data && data.map((v,i)=>(
           
            <img src={v.img} alt="" key={i} className={slide === i ? "sliding": " sliding sliding-hidden"}/>
            
          ))
         }
         <FaChevronCircleRight className='righticon' onClick={nextSlide}/>
         <span className='indicators'>
          {
            data.map((_, idx)=>(
              <FaRegCircle key={idx} onClick={()=>setSlide((idx))} 
              className={slide === idx ? "indicator": "indicator indicator-inactive"}/>
            ))
          }
         </span>
        </div>
      </div>
      
      <div>
      <div className='fourimg'>
        {
          datas && datas.map((v,i)=>(
            <div key={i} className='divs'>
            <img src={v.img} alt="" />
            <h2>{v.title}</h2>
            <p>{v.desc}</p>
            </div>
          ))
        }
      </div>
      </div>

 <div className='products'>
{
        productdetail && productdetail.map((v)=>(
            <div key={v.id} className='imagees'>
            <img src={v.img} alt="" />
             <p>{v.title}</p>
            </div>
          ))
        }
</div> 




      </div>
      
    )
}

export {Header,main}