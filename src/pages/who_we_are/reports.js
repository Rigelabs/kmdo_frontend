import React, { useEffect } from 'react';
import { IoDocumentAttachOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadReports } from '../../actions/aboutusActions';
import "./aboutus.css";
export default function Reports() {
 const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(loadReports());
  }, []);
  const reports=useSelector(state=>state.about_us.reports);
  return (
    <div >
        <div style={{fontSize:"32px",fontWeight:"bold",color:'teal',textAlign:'center'}}>
            Reports</div>
            <div className='reports'>
    {reports ? 
   
      reports.map((report,key)=>(
        <div className='report' key={key}>
          <div style={{margin:"auto"}}><IoDocumentAttachOutline size={80} color={"lightgreen"}/></div>
          <a className='report-link' target="_blank" rel="noreferrer" href={report.link}>{report.title}</a>
        </div>
      ))
      
   
    :null}
       
    </div>
    </div>
  )
}
