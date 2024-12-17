
import "./Notification.css"
import image2 from "../../assets/images/avatar-angela-gray.webp";
import image7 from "../../assets/images/avatar-anna-kim.webp";
import image5 from "../../assets/images/avatar-kimberly-smith.webp";
import image3 from "../../assets/images/avatar-jacob-thompson.webp";
import image1 from "../../assets/images/avatar-mark-webber.webp";
import image6 from "../../assets/images/avatar-nathan-peterson.webp"
import image4 from "../../assets/images/avatar-rizky-hasanuddin.webp"
import { useState } from "react";
const Notification = () => {
    const [clickedNotifications, setClickedNotifications] = useState([]);
   const handelNotification = (index)=>{
   if(!clickedNotifications.includes(index)){
    setClickedNotifications([...clickedNotifications,index])
    
   }
}
   const handelAllNotification = ()=>{
    const allIndexes = notifications.map((_,index) => index);
    setClickedNotifications(allIndexes)
   }
   
    const notifications = [
        {
          image: image1,
          text: (
            <>
              <span className="semi-bold">Mark Webber</span> reacted to your recent post{" "}
              <span className="fw-semibold">My first tournament today!</span>
            </>
          ),
          time: "1m ago",
        },
        {
          image: image2,
          text: (
            <>
              <span className="semi-bold">Angela Gray</span> followed you
            </>
          ),
          time: "5m ago",
        },
        {
          image: image3,
          text: (
            <>
              <span className="semi-bold">Jacob Thompson</span> has joined your group{" "}
              <span className="blue">Chess Club</span>
            </>
          ),
          time: "1 day ago",
        },
        {
          image: image4,
          text: (
            <>
              <span className="semi-bold">Rizky Hasanuddin</span> sent you a private message
            </>
          ),
          time: "5 days ago",
        },
        {
          image: image5,
          text: (
            <>
              <span className="semi-bold">Kimberly Smith</span> commented on your picture
            </>
          ),
          time: "1 week ago",
        },
        {
          image: image6,
          text: (
            <>
              <span className="semi-bold">Awais Ahmed</span> reacted to your recent post{" "}
              <span className="fw-semibold">5 end-game strategies</span>
            </>
          ),
          time: "2 weeks ago",
        },
        {
          image: image7,
          text: (
            <>
              <span className="semi-bold">Anna Kim</span> left the group{" "}
              <span className="blue">Chess Club</span>
            </>
          ),
          time: "2 weeks ago",
        },
      ];
  return (
   <>
  <main className="N-container"> {/*N for Notification */}
   <div className="header d-flex justify-content-between flex-wrap gx-2 mb-3" >
    <h1 className="bold">Notification</h1>
    <p className="read" onClick={handelAllNotification}>Mark all as read</p>
   </div>
   <div className="N-messages">
   {notifications.map((notification,index) =>(
    <div className="Notifications rounded"
         key={index} onClick={()=>handelNotification(index)}>  
      <img src={notification.image} className="first-N"/>
      <div className="N-text">
      <p className="mb-0 text">{notification.text} 
      {!clickedNotifications.includes(index) && ( 
      <div className="dot ms-2 d-inline-block"></div>
      )}
      </p>
      <p>{notification.time}</p>
    </div>
    </div>
    ))}
    </div>
   </main>
   </>
  )
}

export default Notification
