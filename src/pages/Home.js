import React from 'react'
import Fetch from '../customHook/Fetch'
import ShowCard from '../components/ShowCard'
import style from './home.module.css'
import { useEffect, useState } from 'react';
const Home = () => {
    const { data, error } = Fetch("https://api.tvmaze.com/search/shows?q=all");
    const [content, setContent] = useState("")

    useEffect(() => {
        data ? (setContent(data)) : (setContent(''))
    });

    return (
        <div className={style.maincontainer}>
        <h2 className={style.movie}>
            Movies
        </h2>
          <div className={style.container}>
           
           {
               
               content && content.map((d) => {
                   return (
                       <ShowCard data={d} key={d.show.id} />
                   )
               })
           }

       </div>
        </div>
      
    )
}

export default Home