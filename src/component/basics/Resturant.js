import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuAPI'
import Menucard from './Menucard';
import Navbar from './Navbar';


const uniqueList = [
  ...new Set(Menu.map((currelem)=>{
  return currelem.category
})
),"All", 

]

console.log(uniqueList);

 const Resturant = () => {

const [menudata,setmenudata] = useState(Menu);
const [menuList,setMenuList] = useState(uniqueList)

console.log(menudata);

const filterItem = (category) =>{

if(category === "All"){
  setmenudata(Menu)
  return;
}

  const updatedList = Menu.filter((currelem)=>{
    return currelem.category === category;
  })

  setmenudata(updatedList)

}

  return (
    <>

   <Navbar filterItem={filterItem} menuList = {menuList}/>



<Menucard menudata={menudata}/>
           
           
           
           
           
           </>

)
}

export default Resturant;