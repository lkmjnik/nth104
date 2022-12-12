import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { useState,useEffect} from "react";
import {urlLookup, sendRequest } from "../../components/settings/settings";
import { Button, Space , notification } from 'antd';


const openNotification = (title, desc) => {
  notification.open({
    message: title,
    description:
      desc,
    onClick: () => {
      console.log(desc,'Clicked!');
    },
  });
};

export default function Home() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };
    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

const DisplayData=datas && datas.data.map((gazar)=>{
   return (
    <div key={gazar.chiglelnum}>
      <h5><Button  type="primary" onClick={()=>openNotification(gazar.chiglelnum,gazar.chiglelname)}>
      {gazar.chiglelname}</Button></h5>
      <br/>
    </div>
   )
 });



 
  return  (
   <>
  
        {DisplayData}

     <Topbar/>
     <div className="homeContainer">
       <Sidebar/>
       <Feed/>  
       <Rightbar/>
    </div>
   
    </>
  );
}
