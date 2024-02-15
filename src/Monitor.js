import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Monitor = () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const [len, setLen] = useState([]);

    const [data, setDat] = useState([]);

    useEffect(()=>{
        fetch("https://16.171.7.98/questionnns/datata/jdsjkds/fdsfdsnbc/f/f/f/s/sdf/f/b//dg//sd/g/sdg/ds/g/dsg/ds/g/sdg/ds/gsd/g/dsg/ds/gd/get")
        .then(res => res.json())
        .then(data => setDat(data));

        fetch("https://16.171.7.98/valid/id/leng/data/Length")
        .then(res => res.json())
        .then(data => setLen(data));
    },[])
  return (
    <div>
      <center>
        {token &&
            <div>
                {email &&
                    <div>
                        <h2>Account Data</h2>
                        <span className='length-account'>Payments Count : <span>{len.length}</span></span>
                        {data.map((user,i) =>{
                            
                            const Delt = () =>{
                                axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/up/account/modeis/i/${user._id}`)
                                .then(res =>{
                                    if(res.data.Status === "OK"){
                                        window.location.reload();
                                    }else{
                                        alert("cant Able to delete")
                                    }
                                })
                            }

                            return(
                                <div className='monitor-div-01' key={i}>
                                    <center>
                                        <span className='monitor-span-01'>{user.name}</span><br/>
                                        <span className='monitor-span-02'>{user.upi}</span><br />
                                        <button onClick={Delt}>Delete</button>
                                    </center>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        }
      </center>
    </div>
  )
}

export default Monitor
