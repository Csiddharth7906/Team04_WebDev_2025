import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Home from './components/Home';
import TimelineDetalis from './components/TimelineDetalis';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';

const App = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
     const timer = setTimeout(()=>{
        setLoading(false);
     },5000)

     return () => clearTimeout(timer)
  },[])
  return (
    <>
     <Routes >
      <Route path="/"  element={loading?<Loading />:<Home />} />
      <Route path='/timeline' element={<Timeline />}>
        <Route path='/timeline/:id' element={<TimelineDetalis />} />
      </Route>
      <Route path='/gallery' element={<Gallery />} />
     </Routes>
    </>
  )
}


export default App

























































//  {
//       img: "https://www.shutterstock.com/image-vector/india-technology-wireless-network-communication-600nw-2344722861.jpg",
//       title: "Digital Freedom Gallery",
//       description: "Code a Vision. Design the Nation.",
//       content: [
//         "India's digital transformation journey begins here.",
//         "Empowering millions through technology."
//       ]
//     },
//     {
//       img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/archaeological-sites-in-india.jpg",
//       title: "Ancient Roots of Innovation",
//       description: "Indus Valley Civilization, early inventions, and ancient mathematics.",
//       content: [
//         "Early urban planning and script development.",
//         "Concepts like zero and decimal system originated here."
//       ]
//     },
//     {
//       img: "https://thepunjabpulse.com/2024/wp-content/uploads/2024/08/Main-building-scaled.jpg",
//       title: "Medieval India: Knowledge & Culture",
//       description: "Nalanda University and the golden age of science and art.",
//       content: [
//         "Nalanda was a hub for scholars worldwide.",
//         "Advancements in astronomy, medicine, and arts."
//       ]
//     },
//     {
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRsmzj-Hi6wnSb7F-5TsIrpeiHLtpf39ycQ&s",
//       title: "Freedom Struggle & Tech Awakening",
//       description: "Technology aiding freedom fighters - print, telegraph, and radio.",
//       content: [
//         "Communication tech helped unite the nation.",
//         "Radio broadcasts spread the message of freedom."
//       ]
//     },
//     {
//       img: "https://images.squarespace-cdn.com/content/v1/618a55c4cb03246776b68559/1681196851064-B2B4FW507WYK50V4VORM/f4fbb42b-a038-4cea-aaed-0ea90f7f01c0_2400x1600.jpg",
//       title: "Post-Independence Modernization",
//       description: "Green Revolution, ISRO's rockets, and IT boom beginnings.",
//       content: [
//         "Growth in agriculture and space technology.",
//         "India's IT sector began to rise."
//       ]
//     },
//     {
//       img: "https://www.mindgate.solutions/wp-content/uploads/2025/04/understanding-qr-code-payments-for-seamless-transactions.jpg",
//       title: "Digital India Movement",
//       description: "Aadhaar, UPI, broadband connectivity, and startups.",
//       content: [
//         "Aadhaar unified identity verification.",
//         "Digital payments and startups flourished."
//       ]
//     },
//     {
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQG1NIA3j98LlFTIckKGUD0aBj09Y_Hx_7w&s",
//       title: "Empowering Citizens",
//       description: "Digital literacy, e-governance, and rural internet penetration.",
//       content: [
//         "Bridging digital gaps across the country.",
//         "Improving governance through technology."
//       ]
//     },
//     {
//       img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/mom.jpg",
//       title: "Vision 2047 & Beyond",
//       description: "AI, robotics, space exploration, and smart cities.",
//       content: [
//         "Future focused on AI and smart infrastructure.",
//         "Building a sustainable, tech-driven society."
//       ]
//     }