import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
function SearchBar() {
  return (
    <div>
      <div className="inputbox">
        <div className="inputdata">
        <SearchOutlinedIcon/>
       <input className="inputcss" type="text" placeholder="Search..." name="search"/>
        </div>
    
      </div>

    </div>
  )
}

export default SearchBar
