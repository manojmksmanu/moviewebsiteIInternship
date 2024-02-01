import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Fetch from '../customHook/Fetch';
import style from './singleshow.module.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TicketBookForm from '../components/TicketBookForm';
import INF from '../images/imgnotfound.jpg'
import { RxCross1 } from "react-icons/rx";
const SingleShow = () => {
  const { data } = Fetch("https://api.tvmaze.com/search/shows?q=all")
  const { id } = useParams();
  const [singleShow, setSingleShow] = useState("")

  const [name, setName] = useState("")
  const [tickets, setTickets] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")

  const local = window.localStorage;
  function savetolocal() {
    console.log("hello")
    var details = {
      name: name,
      tickets: tickets,
      phone: phone,
      date: date
    }
    localStorage.setItem('details', JSON.stringify(details))
  }
  useEffect(() => {
    data && data.map((d) => {
      if (d.show.id == id) {
        console.log(d.show)
        setSingleShow(d.show)
      }
    })
  })

  return (
    <div>
      {
        singleShow ?
          <div className={style.container}>
            <div className={style.main_container}>
              <div className={style.main_image}>
                {singleShow.image ? <img src={singleShow.image.original} /> : <img src={INF} />}
              </div>
              <div className={style.content}>
                <h2>{singleShow.name}</h2>
                <p>{singleShow.language}</p>
                <div>
                  {
                    singleShow.genres.map((d) => {
                      return <span className={style.genre}>{d}</span>
                    })
                  }
                </div>
                <p className={style.summary}>
                  {singleShow.summary.replaceAll('<p>', " ").replaceAll('</p>', " ").replaceAll('<b>', "").replaceAll('</b>')}
                </p>
                <Popup trigger=
                  {<button className={style.book_ticket}>Book Your Ticket </button>}
                  modal nested>
                  {
                    close => (
                      // Ticket Booking form
                      <div className={style.module}>

                        <TicketBookForm movie_name={singleShow.name}
                          name={name}
                          setName={setName}
                          phone={phone}
                          setPhone={setPhone}
                          setDate={setDate}
                          data={date}
                          tickets={tickets}
                          setTickets={setTickets}
                        />

                        <div>
                          <button
                            className={style.submit}
                            onClick={() => savetolocal()
                            }
                          >
                            <p onClick={() =>
                              close()
                            }>☺☺ Submit ☺☺</p>

                          </button>
                          <button className={style.close_model_btn} onClick=
                            {() => close()}>
                            <RxCross1 />
                          </button>
                        </div>
                      </div>
                    )
                  }
                </Popup>
              </div>
            </div>
          </div>
          : <>
            Loading
          </>

      }
    </div>
  )
}

export default SingleShow