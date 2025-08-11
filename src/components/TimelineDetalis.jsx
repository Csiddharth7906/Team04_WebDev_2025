import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom';

const TimelineDetalis = () => {
         const [ timeline, setTimeline] = useState([]);
         const {id}=useParams();
         const year=timeline.find((item)=>item.id===id);

      useEffect(() => {
    // Fetch timeline data
    fetch('/timelineData.json')
      .then(res => res.json())
      .then(setTimeline);

  }, []);
  return (
    <div className='w-full min-h-screen p-6 flex flex-col items-center'>
        <h1 className='text-4xl mb-8'>&nbsp;</h1>
        <div className='mb-10 text-center'>
            <h1 className='text-2xl'>{year.title}</h1>
            <p className='text-zinc-500 text-2xl font-medium'>{year.subtitle}</p>
        </div>
        <div className='w-[150vh] '>

        </div>
    </div>
  )
}

export default TimelineDetalis