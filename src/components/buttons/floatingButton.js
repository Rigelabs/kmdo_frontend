import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import "./buttons.css"
export default function FloatingButton() {

  const navigate = useNavigate()
  return (
    <div className='floating-button' onClick={e => navigate("/add_board_member")}>

      <BsPlus size={50} style={{ marginTop: "5px", color: "white" }} />

    </div>
  )
}
