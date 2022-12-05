import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Righbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"
import { useEffect } from "react";

export default function Home() {

  const [data, setData] = useState()
  useEffect(()=> {
    sendRequest()
  },[])

  const sendRequest = async () => {
    await fetch("http://btax.mandakh.org:8000/lookup/", {
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        action: "aimagsum"
      })
    })
    .then((res) => res.json())
    .then(async (data) => {
      setData(data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
    

  return (
    <>
      {/* <p className="txt">{data && data.data[9].chiglelname}</p> */}
      <Topbar data={data && data.data[19].sumduud[7].sumname}/> 
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
