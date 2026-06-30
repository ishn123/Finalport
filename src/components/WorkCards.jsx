import React from 'react'
import { useNavigate,createSearchParams } from "react-router-dom";
import './Cards.css'

const baseURI = encodeURI(`https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/`);

function WorkCards({title,para,imageurl,cardText,backcolor,tags,desc,previewlink,sourcecodelink}) {
  const navigate = useNavigate();
  const imArr = imageurl?.asset?._ref.split("-");

  const queryParams = {Title:title,para:para,url:baseURI+imArr[1]+'-'+imArr[2]+"."+imArr.slice(-1),shortdesc:cardText,desc:desc,sourcecodelink,previewlink}
  const navigateHandler = (path) => {
    
    navigate(path);
  }
  return (
    <div>
       <div className="card-container-product">
        <div className="card">
          <h2>{title}</h2>
          <i className="fas fa-arrow-right"></i>
          <p>{para}</p>
          <div className="pic" style={{backgroundImage:`url(${baseURI+imArr[1]+'-'+imArr[2]+"."+imArr.slice(-1)})`}}></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
         
          <button style={{backgroundColor:`${backcolor}`}} onClick={() => { navigateHandler(`/projectone?${createSearchParams(queryParams)}`) }}>
          </button>
        </div>
          <div className="card card2">
            <div className="card-text">{cardText}</div>
            <div className="card-tags">
              {tags.map(item=>{
                return (
                  <div className="card-tag-text">{item.toUpperCase()}</div>
                )
              })}
             </div>
            <ul>   
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            <li></li>
            <li></li>
              </ul>
        </div>
    </div>
    </div>
  )
}

export default WorkCards;
