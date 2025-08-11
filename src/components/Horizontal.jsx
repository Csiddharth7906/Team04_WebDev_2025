import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const slides = [
    {
      img: "https://www.shutterstock.com/image-vector/india-technology-wireless-network-communication-600nw-2344722861.jpg",
      title: "Digital Freedom Gallery",
      description: "Code a Vision. Design the Nation.",
      content: [
        "India's digital transformation journey begins here.",
        "Empowering millions through technology."
      ]
    },
    {
      img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/archaeological-sites-in-india.jpg",
      title: "Ancient Roots of Innovation",
      description: "Indus Valley Civilization, early inventions, and ancient mathematics.",
      content: [
        "Early urban planning and script development.",
        "Concepts like zero and decimal system originated here."
      ]
    },
    {
      img: "https://thepunjabpulse.com/2024/wp-content/uploads/2024/08/Main-building-scaled.jpg",
      title: "Medieval India: Knowledge & Culture",
      description: "Nalanda University and the golden age of science and art.",
      content: [
        "Nalanda was a hub for scholars worldwide.",
        "Advancements in astronomy, medicine, and arts."
      ]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRsmzj-Hi6wnSb7F-5TsIrpeiHLtpf39ycQ&s",
      title: "Freedom Struggle & Tech Awakening",
      description: "Technology aiding freedom fighters - print, telegraph, and radio.",
      content: [
        "Communication tech helped unite the nation.",
        "Radio broadcasts spread the message of freedom."
      ]
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/618a55c4cb03246776b68559/1681196851064-B2B4FW507WYK50V4VORM/f4fbb42b-a038-4cea-aaed-0ea90f7f01c0_2400x1600.jpg",
      title: "Post-Independence Modernization",
      description: "Green Revolution, ISRO's rockets, and IT boom beginnings.",
      content: [
        "Growth in agriculture and space technology.",
        "India's IT sector began to rise."
      ]
    },
    {
      img: "https://www.mindgate.solutions/wp-content/uploads/2025/04/understanding-qr-code-payments-for-seamless-transactions.jpg",
      title: "Digital India Movement",
      description: "Aadhaar, UPI, broadband connectivity, and startups.",
      content: [
        "Aadhaar unified identity verification.",
        "Digital payments and startups flourished."
      ]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQG1NIA3j98LlFTIckKGUD0aBj09Y_Hx_7w&s",
      title: "Empowering Citizens",
      description: "Digital literacy, e-governance, and rural internet penetration.",
      content: [
        "Bridging digital gaps across the country.",
        "Improving governance through technology."
      ]
    },
    {
      img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/mom.jpg",
      title: "Vision 2047 & Beyond",
      description: "AI, robotics, space exploration, and smart cities.",
      content: [
        "Future focused on AI and smart infrastructure.",
        "Building a sustainable, tech-driven society."
      ]
    }
  ];

 const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const totalWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,        
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full"
        style={{ width: `${slides.length * 100}vw` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-screen flex items-center justify-around p-10"
          >
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
              <p className="mb-3">{slide.description}</p>
              <div className="text-gray-700 space-y-1">
                {slide.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
            <div className="w-80 h-80 rounded-full overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Horizontal;