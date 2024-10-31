import React, { useState } from "react";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


const Reviews = () => {

//     const [clubs, setClubs] = useState

//     const getClub = () => {
//         fetch('api/clubs')
//         .then(res => res.json)
//         .then(json =>console.log(json))
//       }

//       useEffect(()=> {
//         getClub()
//       }, [])

      return(

        <div>
            <h1>Leave a review!</h1>
            <h1>Find a club</h1>
            <br />


    

            {/* <form onSubmit={handleSubmit}>    
            
             <div>
        <label>Team Name:</label>
        <input type="text" name="teamname" value={formData.teamname} onChange={handleChange} required />
      </div>
      <br />
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <br />
      <div>
        <label>Years Played:</label>
        <input type="number" name="yearsplayed" value={formData.yearsPlayed} onChange={handleChange} required />
      </div>
      <div>
        <label>League:</label>
        <input type="text" name="league" value={formData.league} onChange={handleChange} required />
      </div>
      <div>
        <label>Coach:</label>
        <input type="text" name="coach" value={formData.coach} onChange={handleChange} required />
      </div>
      </form> */}
      
      <br />
 
            
        </div>
        


      )

}

//cant add the form without it breaking the page >_<//

export default Reviews