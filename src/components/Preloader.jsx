import React from 'react';
import { quote } from '../data/data';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProgress } from "react-redux-progress";

function Preloader({ store }) {
  const loader = useSelector(state => state.preloader.loading);
  const pro = useProgress(loader, {
    maxPercent: 100
  })


  const dispatch = useDispatch();
  let inte;
  let temp = Math.floor(Math.random() * 194);
  const [i, seti] = useState(temp);
  const loading = () => {

    inte = setInterval(() => {
      let temp = Math.floor(Math.random() * 194);
      seti(temp);
    }, 4000);

  }

  useEffect(() => {
    setTimeout(loading, 1000);
  }, []);

  return (
    <div className='pre'>
      <div className="loader" onClick={() => seti(Math.floor(Math.random() * 194))}>
        <div className="load"><span id='name' style={{ fontFamily: "General Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif" }}>नमस्ते</span>

          <div className="progress">
            <div className="bar" style={{ width: `${pro}%` }}>
            </div>
          </div>
          <span id="percent">{Math.floor(pro)}%</span>
        </div>
        <div id='quote'><span id="blc">"{quote[i].text}"</span>
          <span id="author">~{quote[i].author}</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader;

