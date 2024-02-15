import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Claimform = () => {

    const [name , setName] = useState([]);
    const [upi , setUPI] = useState([]);
    const [veri, setVeri] = useState([]);
    const [ipad, setIpad] = useState([]);

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const ip = queryParm.get('id')
    localStorage.setItem('ip', ip);

    useEffect(()=>{
        fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))

        fetch(`https://16.171.7.98/question/singel/verify/data/01/${ip}`)
        .then(res => res.json())
        .then(data => setVeri(data))

    },[])

    const Nameup = (e) =>{
        setName(e.target.value);
    }

    const UPIup = (e) =>{
        setUPI(e.target.value);
    }

    const Post = (e) =>{
        e.preventDefault();
        const Country = ipad.country
        axios.post("https://16.171.7.98/account/data/post/get",{ip, Country, upi,name})
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://16.171.7.98/delete/data/api/dont/know/${veri._id}`)
                .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.removeItem("jki")
                        localStorage.removeItem("Qno");
                        alert("Within 5 min, Amount will credit to you'r Account, Please Follow us on Instagram 'staWro', for More Updates")
                        window.location.href='/'
                    }
                })
            }else{
                alert("Retry Again")
            }
        })
    }


  return (
    <div>
      <center>
        <h1 className='form-h1-wish'>You Won Claim Reward Now</h1><br/>
        <span>Add your's Payment Data</span><br />
        <div>
            <form onSubmit={Post}>
                <input className='Claim-input' type='text' onChange={UPIup} placeholder='Phone pay Number / UPI ID' /><br/>
                <input className='Claim-input' type='text' onChange={Nameup} placeholder='Name' required/> <br />
                {veri.verify === "True" &&
                    <div>
                        {ip === ipad.ip &&
                        <div>
                        <button type='submit' className='claim-btn'>Post</button>                        
                        </div>   
                        }
                    </div>

                }
            </form>
        </div>
      </center>
    </div>
  )
}

export default Claimform
