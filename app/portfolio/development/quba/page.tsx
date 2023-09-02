import React from 'react'
import Development from '../page'
import TopQuba from "@/app/components/Portfolio/quba/TopQuba";
import BottomQuba from '@/app/components/Portfolio/quba/BottomQuba';


function Quba() {
  return (
    <Development activeTab='quba'>
       <TopQuba />
       <BottomQuba/>
    </Development>
  )
}

export default Quba