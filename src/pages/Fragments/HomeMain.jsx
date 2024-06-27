import React, { useEffect, useState } from 'react'
import "../Styles/Home.css";
import "../Styles/universal.css"
import axios from 'axios';

const HomeMain = () => {
  const [searchVal, setSearchVal] = useState(''); //this will store search values
  const [loading, setLoading] = useState('none'); //this will show/don't show the loading..
  const [musicData, setMusicData] = useState(null); //this will store the fetched data..

  const fetchData = async () => {
    setLoading("block");
    try {
      const url = `https://youtube-api-3g52.onrender.com/api/${searchVal}`;
      const response = await axios.request(url);
      await setMusicData(response.data.data);
      setLoading("none");
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading("none");
    }
  };

  useEffect(() => {
    if (musicData === null) {
      console.log("Network error, please try again...");
    } else {
      console.log(musicData);
    }
  }, [musicData]);

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
        <input
          type="text"
          placeholder='Search Video or Paste Link.. '
          className="search_inp"
          name='search-bar'
          required
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="search_btn" onClick={fetchData}>
          <img src="/gama_audios/search.svg" alt="search" />
        </button>
      </div>

      <div className='loader' style={{ display: loading }}>Loading...</div>

      {/* SEARCH RESULTS */}
      <div className="search_results">
        {
          musicData && musicData.length > 0 ? (
            musicData.map((item, index) => (
              <div className="search_results_child" key={index}>
                <div className="search_res_img">
                  <img className='search-res_img_inner_img' src={item.thumbnail || "/gama_audios/album.jpg"} alt="album" />
                </div>
                <div className="search_res_texts">
                  <p className="search_text_res">Title: {item.title || "Gama Audios Official | Album"}</p>
                  <p className="search_text_res">Views: {item.views || "12M"}
                    <button>Download</button>
                    <button>Watch</button>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="search_results_child">
              <div className="search_res_img">
                <img src="/gama_audios/album.jpg" alt="album" />
              </div>

              <div className="search_res_texts">
                <p className="search_text_res">Title: Gama Audios Official | Album</p>
                <p className="search_text_res">Views: 12M
                  <button>Download</button>
                  <button>Watch</button>
                </p>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default HomeMain
