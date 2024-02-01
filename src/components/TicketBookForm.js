import React from 'react'
import styles from './ticketform.module.css'
import { RiMovie2Line } from "react-icons/ri";

const TicketBookForm = ({ movie_name, name, setName, date, setDate, tickets, setTickets, phone, setPhone }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}><RiMovie2Line />Book Your Ticket<RiMovie2Line /></div>
            <div className={styles.moviename}>{movie_name}</div>
            <div className={styles.formcontainer} >
                <div>
                    <input
                        placeholder='First Name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    placeholder='Number of tickets for adults' 
                    type='number' 
                    value={tickets}
                    onChange={(e)=> setTickets(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    placeholder='Enter you phone number' 
                    type='text' 
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    placeholder='name' 
                    type='date' 
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                    />
                </div>

            </div>
        </div>

    )
}

export default TicketBookForm