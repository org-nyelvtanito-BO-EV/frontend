import React, { useContext } from 'react'
import ValaszdKiForm from './ValaszdKiForm';
import { ApiContext } from '../contexts/ApiContext';

function ValaszdKi() {
  const {kerdesek }=useContext(ApiContext)
 return (
  <>
  {
    kerdesek.map(
      (elem,i)=>{
        return <ValaszdKiForm elem={elem} key={i}/>
      }
    )
  }
  </>
 )
}
export default ValaszdKi