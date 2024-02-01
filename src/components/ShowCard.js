import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './component.module.css'
import INF from '../images/imgnotfound.jpg'
const ShowCard = ({ data }) => {

    return (
        data.show.id && 
            <Link to={`/${data.show.id}`}>
               <div className={style.box}>
                    {
                        data.show.image ? <img src={data.show.image.medium} /> :<img src={INF}/>
                    }
                    <div className={style.content}>
                        <p>{data.show.name}
                        {
                            
                        }
                        </p>
                        {/* <p>{data.show.rating.average}</p> */}
                    </div>
                </div>        
             </Link>   
    )
}

export default ShowCard