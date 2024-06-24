import React from 'react'
import "../Styles/Home.css";
const HomeMain = () => {
  return (
    <>
      <h1 className='home_heading'>Download your favourite songs in just <i>59sec</i></h1>
      <p className='home_heading semiheading'><b>• With Gama Audios •</b></p>
      <div className="logo_and_text">
        <img src="/gama_audios/logo_.png" alt="logo" className='blacklogo home_logo' />
        <h2>Gama Audios</h2>
      </div>
      {/* SEARCH area */}
      <div className="home_search_area">
        <input type="text" placeholder='Search Video or Paste Link.. ' className="search_inp" />
        <button className="search_btn">
          <img src="/gama_audios/search.svg" alt="search" />
        </button>
      </div>

      {/* SEARCH RESULTS */}
      <div className="search_results">
        <div className="search_results_clild">
          <div className="search_res_img">
            <img src="/gama_audios/album.jpg" alt="album" />
          </div>
          <div className="search_res_texts">
            <p className="search_text_res">Title: Avicii The nights || sound cloud  </p>
            <p className="search_text_res"> Views: 12M <button>Download</button>  <button>watch</button></p>
          </div>
        </div>

      </div>

    </>
  )
}

export default HomeMain
