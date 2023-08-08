import React from 'react'
import './FlexibleBody.css'
import SideBar from './FlexibleNavs/SideBar.jsx'
import { useState,useEffect } from 'react'
import QAModal from './components/componentsQandA/qa-modal.jsx'
import {Line, Rows} from '././UiKit/Line/Line.jsx'
import {Grid} from './../Flexible/UiKit/Grid/Grid.jsx'



function FlexibleBody() {
  const [frameChoice, setFrameChoice] = useState('')

  return (
    <>
      <div className='flexibleBodyContainer'>
      <h2>flexible container</h2>
    <Grid addClass={"flexibleBodyContainerGrid"}>
          <Line addClass={"bodyContainerFlexible"}>
             {/* <QAModal/> */}
              {frameChoice === 'QAModal' && <QAModal/>}
              {frameChoice === 'tagBook' && <SideBar/>}
          </Line>
          <Line addClass={"sideBar"}>
          <Rows>
          <button 
          onClick={() => {
            setFrameChoice('QAModal')
          }
          }
          className='sideNavBtn'>?!</button>
          </Rows>
          <Rows><button 
          onClick={() => {
            setFrameChoice('TagsBook')
          }
          }
          
          className='sideNavBtn'>📓</button>
          </Rows>       
            
            </Line>
        </Grid>


      </div>
    </>
  )
}

export default FlexibleBody