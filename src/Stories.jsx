import React from 'react'
const stories = [
  { name: "Your story", img: 5 },
  { name: "alexandra", img: 47 },
  { name: "jordan", img: 11 },
  { name: "maya", img: 44 },
  { name: "noah", img: 59 },
  { name: "nina", img: 12 }
];
function Stories() {
  return (
    <div className="stories">
        {stories.map((story)=> (
            <div className='story' key={story.name}>
                <div className='story-ring'>
                    <img src={`https://i.pravatar.cc/150?img=${story.img}`} alt={story.name} />
                    </div>
                 <span>{story.name}</span>
            </div>
        ))}

    </div>
  )
}

export default Stories