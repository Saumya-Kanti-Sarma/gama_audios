import React, { useEffect, useState } from 'react'
import "../Styles/Home.css";
import "../Styles/universal.css"
import axios from 'axios';

const HomeMain = () => {
  const [searchVal, setSearchVal] = useState(''); //this will store search values
  const [musicData, setMusicData] = useState(null); //this will store the fetched data..
  const [displayLoading, setDisplayLoading] = useState("none"); //this will toggle between loading and content displaying.
  const [displayContent, setDisplayContent] = useState("block"); //this will toggle between loading and content displaying.

  // video contents 
  const [title, setTitle] = useState("title of the video");
  const [views, setViews] = useState("121M");
  const [thumbnail, setThumbnail] = useState("/gama_audios/album.jpg");

  const fetchData = async () => {
    setDisplayLoading("block");
    setDisplayContent("none");
    try {
      const url = `https://audiodownload.onrender.com/api/mp3/info?search=${searchVal}`;
      const response = await axios.get(url);
      setMusicData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setDisplayLoading("none");
      setDisplayContent("block");
    }
  };

  useEffect(() => {
    if (musicData) {
      console.log(musicData);
      setThumbnail(musicData.thumbnail);
      setViews(musicData.views);
      setTitle(musicData.title);
    }
  }, [musicData]);

  // setting views in more readable manner
  const formatViews = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  // DOWNLOAD FUNCTION
  const [dlLink, setDlLink] = useState(null);
  const [dtext, setDtext] = useState("Download");

  useEffect(() => {
    const fetchDownloadLink = async () => {
      setDtext("Loading..");
      try {
        const response = await axios.get(`https://audiodownload.onrender.com/api/mp3/link?url=${searchVal}`);
        setDlLink(response.data.audio_url);
        setDisplayLoading("none");
        setDisplayContent("block");
        setDtext("Download");
      } catch (error) {
        console.error('Error fetching download link:', error);
        setDtext("Download");
      }
    };

    if (searchVal) {
      fetchDownloadLink();
    }
  }, [searchVal]);

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
          placeholder='Paste the Youtube Video Link.. '
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

      <div className='loader' style={{ display: displayLoading }}>Loading...</div>

      {/* SEARCH RESULTS */}
      <div className="search_results" style={{ display: displayContent }}>

        <div className="search_results_child">
          <div className="search_res_img">
            <img className='search-res_img_inner_img' src={thumbnail || "gama_audios/album.jpg"} alt="album" />
          </div>
          <div className="search_res_texts">
            <p className="search_text_res">Title: {title}</p>
            <p className="search_text_res" > Views: {formatViews(views)}
              <button>
                <a href={dlLink}>{dtext}</a>
              </button>

              <button>
                <a href={searchVal} target="_blank" rel="noopener noreferrer">watch</a>
              </button>

            </p>
          </div>
        </div>

      </div>

    </>
  )
}

export default HomeMain;
