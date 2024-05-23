import React from 'react';
import { data } from '../../Db';
import { useState } from 'react';

const Fetch = () => {
    // const [data,setData] = useState([]);
    
  return (
    <>
    <main>
    <section>
        {data.map((datum)=>{
            const {id,title,description,image,profile}= datum
            return(
                <div key={id}>
                    <div>
                    <img src={profile} alt="profile-image" />
                    <button>{statusbar}</button>
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={image} alt="feed-image" />
                </div>
            )


        })}


    </section>

    </main>
    
    
    </>
  )
}

export default Fetch