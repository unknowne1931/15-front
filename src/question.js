import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Question = () => {

  const [data, setData] = useState([])
  const Qno = localStorage.getItem("Qno");
  const [verrii, setVerrii] = useState([]);
  const [lock, setLock] = useState([]);
  const [ipad, setIpad] = useState([]);

  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const ip = queryParm.get('id')
    localStorage.setItem('ip', ip);


    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 15;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
      setRunning(true);
    };

    useEffect(() => {

      startTimer()
      //timer
  
      let intervalId;
  
      if (running && seconds > 0) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => {
            const newSeconds = prevSeconds - 1;
            localStorage.setItem('remainingSeconds', newSeconds);
            return newSeconds;
          });
        }, 1000); // Update the timer every 1000ms (1 second)
      }
  
      return () => {
        clearInterval(intervalId);
      };
      //timer
  
    }, [running, seconds])
  
  
  
  
    localStorage.setItem('countdownSeconds', seconds.toString());
  
  
    if(seconds === 0){
      window.location.href='/'
    }else if(seconds > 15){
      window.location.href='/'
    }
  
    ///ti

    const [upii1 , setUpii1] = useState([])
    const [upii2 , setUpii2] = useState([])

  useEffect(()=>{
    axios.post("https://16.171.7.98/verify/account/key",{ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        setLock(res.data.user);
      }
    })

    fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))

        fetch(`https://16.171.7.98/question/singel/verify/data/01/${ip}`)
        .then(res => res.json())
        .then(data => setVerrii(data))

    if(Qno !== null){
      fetch(`https://16.171.7.98/question/singel/01/${Qno}`)
      .then(res => res.json())
      .then(data => setData(data));
    }
    fetch(`https://16.171.7.98/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${ip}`)
    .then(res => res.json())
    .then(data => setUpii1(data))

    fetch(`https://16.171.7.98/question/singel/verify/data/01/sakhd/${ip}`)
    .then(res => res.json())
    .then(data => setUpii2(data))

  },[])


  const Button1 = () =>{
    const Option  = "A"
    axios.post("https://16.171.7.98/answer/check/question/correct/or/wrong",{Option, Qno, ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }else{
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
        
      }
    })
  }

  const Button2 = () =>{
    const Option  = "B"
    axios.post("https://16.171.7.98/answer/check/question/correct/or/wrong",{Option, Qno ,ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }else{
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }
    })
  }

  const Button3 = () =>{
    const Option  = "C"
    axios.post("https://16.171.7.98/answer/check/question/correct/or/wrong",{Option, Qno, ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }else{
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }
    })
  }

  const Button4 = () =>{
    const Option  = "D"
    axios.post("https://16.171.7.98/answer/check/question/correct/or/wrong",{Option, Qno ,ip})
    .then(res =>{
      if(res.data.Status === "OK"){

        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }else{
        axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://16.171.7.98/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            alert("Contact Admin on Instagram ID : 'stawro'")
          }
        })
      }
    })
  }

  return (
    <div>
      {verrii.ip
      ?
      <center>
        
      </center>
      :
      <div>
        <center>
        <div className='question-div-01'>
            <span className='question-div-01-span-01'>Seconds : <span className='question-div-01-span-01-span-01'>{seconds}</span></span><span></span>
            <div className='question-div-02'>
                <span className='question-div-02-span-01'>{data.question}</span><br />

                {data.img !== "" &&
                  <div className='question-div-cnt-04'>
                    <img src={data.img}/>
                  </div>
                }
                
                {lock.ip ?
                <div>
                  <span>After Payment, The new Game Begins</span>
                </div>
                :
                <div className='question-div-03'>
                  <button onClick={Button1}>{data.optionA}</button> <button onClick={Button2}>{data.optionB}</button><br />
                  <button onClick={Button3}>{data.optionC}</button> <button onClick={Button4}>{data.optionD}</button>
                </div>
                
                }
            </div>
        </div>
        </center>
      </div>
        }
    </div>
  )
}

export default Question;