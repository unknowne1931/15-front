import React, { useEffect, useState } from 'react'
import axios from "axios"

const Play = () => {

    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 15;
    const [seconds, setSeconds] = useState(initialSeconds);

    const [Qno , setQno] = useState(null);
    const [ipad, setIpad] = useState([]);
    const [Lock, setLock] = useState([]);

    const ip = ipad.ip;

    useEffect(()=>{
        generateRandomNumber();

        fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))
    },[])
    localStorage.setItem("jki", ipad.ip)

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 4) + 1; // Generates a random number between 1 and 100
        setQno(newRandomNumber);
    }

    const Post = (e) =>{
        e.preventDefault();
        const ip = ipad.ip
        const Country = ipad.country
        axios.post("https://16.171.7.98/verify/account/key",{ip})
            .then(res =>{
            if(res.data.Status === "OK"){
                alert("Play After money Credited to you'r Account")
            }else{
                axios.post('https://16.171.7.98/data/upi/post/to/db',{ip ,Country, Qno})
                .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.setItem("jki", ip)
                        localStorage.setItem("Qno" , Qno)
                        localStorage.setItem('countdownSeconds', seconds.toString());
                        localStorage.setItem('remainingSeconds', 15);
                        window.location.href=`/play?id=${ip}`
                    }else{
                        alert("You Had Played Before")
                    }
                })
            }
            })
    }
  return (
    <div className='play-body'>
      <center>
        <h1 className='play-h1'>sta<span className='play-h1-span-w'>W</span>ro</h1>
        <span className='play-span-01'>* On Playing don't connect Network with Wifi, VPN.</span><br/>
        <span className='play-span-01'>* Answer Singel Question in Between <span>15 Seconds</span>.</span><br/>
        <span className='play-span-02'>Play and Get ₹ 10.00</span>
        <div className='div-cnt-01'>
            
            {ipad.country === "IN" &&
                <div>
                    <button onClick={Post} >start</button>
                </div>
            }
        </div>
      </center>
    </div>
  )
}

export default Play
