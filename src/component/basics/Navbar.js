import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
    
        <nav className='navbar'>
    <div className='btn-group'>
{
    menuList.map((currelem)=>{
        return(
    <button className='btn-group__item' onClick={() => filterItem(currelem)}>{currelem}</button>

        )
    })

}

    {/* <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
    <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
    <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button> */}
    {/* <button className='btn-group__item' onClick={() => setmenudata(Menu)}>All</button> */}

    </div>

    </nav>

    </>
  )
}

export default Navbar