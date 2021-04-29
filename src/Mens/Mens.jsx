import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import arrow from "../assets/arrow.png"
import sea from "../assets/sea.png"
import fil from "../assets/fil.png"
import a from "../assets/Mens/1.png"
import b from "../assets/Mens/2.png"
import c from "../assets/Mens/4.png"
import d from "../assets/Mens/5.png"
// import Homepage from '../HomePage/Homepage';
class Mens extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           data:[
             {
               index:1,
               img:a,
               header:'Sneakers Shoes',
             },
             {
                index:2,
                img:b,
                header:'Casusal Shoes',
             },
             {
                index:2,
                img:c,
                header:'Formal Shoes',
             },
             {
                index:2,
                img:d,
                header:'Sports Shoes',
             },
             {
                index:1,
                img:a,
                header:'Sneakers Shoes',
              },
              {
                 index:2,
                 img:b,
                 header:'Casusal Shoes',
              },
           ]
        }
    }
    Homepage=()=>{
        window.location.href="/"
    }
    render(){
      
        return (
            <div>
                <img onClick={this.Homepage} src={arrow} style={{float:'left',marginLeft:18}}/>
     <text style={{fontSize:18,fontWeight:'bold'}}>MENS</text>
     
     <img src={fil} style={{float:'right',marginLeft:18}}/>
     <img src={sea} style={{float:'right',marginLeft:18}}/>
     <hr/>
     <div className="container">
         <div className="row mt-2">
             {this.state.data.map((item,index)=>(
                 <div className="col-6 mt-3">
                 <div className="card" style={{borderRadius:22}}>
                     <img src={item.img}/>
                   <div className="card-body">{item.header}</div>
                 </div>
                 </div> 
             ))}
   
         </div>
     </div>
            </div>
        )
    }
  
}

export default Mens
