import React from 'react'
import Avatars from "../Avatars/Avatars"
import Corouselss from "../corousel/Corousel"
import SearchBar from "../searchbar/SearchBar"
import Header from "../Header"
function Homepage() {
    return (
        <div>
             <Header/>
       <Corouselss/>
       <br/>
       <center><SearchBar/></center>
<br/>
<Avatars/>
<br/>
<text style={{float:'left',marginLeft:20,fontSize:20,fontWeight:'bold'}}>Shop our Exclusives</text>
<br/>
<div className="container">
<div className="container">
    <br/>
<Corouselss/>
</div>
</div>

        </div>
    )
}

export default Homepage
