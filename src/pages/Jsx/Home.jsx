import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import "../Styles/universal.css";
import "../Styles/Home.css";
const Home = () => {
  return (
    <>
      <main>
        <nav style={{ position: "sticky" }}><Nav /></nav>

        <div className="content home-content">

          <div className="content-area main_content">
            <h1 className='home_heading'>Download your favourite songs in just <i>59sec</i></h1>
            <p className='home_heading semiheading'><b>• With Gama Audios •</b></p>
            <div className="logo_and_text">
              <img src="/gama_audios/logo_.png" alt="logo" className='blacklogo home_logo' />
              <h2>Gama Audios</h2>
            </div>
            {/* SEARCH */}
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
              <div className="search_results_clild">
                <div className="search_res_img">
                  <img src="/gama_audios/album.jpg" alt="album" />
                </div>
                <div className="search_res_texts">
                  <p className="search_text_res">Title: Avicii The nights || sound cloud  </p>
                  <p className="search_text_res"> Views: 12M <button>Download</button>  <button>watch</button></p>
                </div>
              </div>
              <div className="search_results_clild">
                <div className="search_res_img">
                  <img src="/gama_audios/album.jpg" alt="album" />
                </div>
                <div className="search_res_texts">
                  <p className="search_text_res">Title: Avicii The nights || sound cloud  </p>
                  <p className="search_text_res"> Views: 12M <button>Download</button>  <button>watch</button></p>
                </div>
              </div>
              <div className="search_results_clild">
                <div className="search_res_img">
                  <img src="/gama_audios/album.jpg" alt="album" />
                </div>
                <div className="search_res_texts">
                  <p className="search_text_res">Title: Avicii The nights || sound cloud  </p>
                  <p className="search_text_res"> Views: 12M <button>Download</button>  <button>watch</button></p>
                </div>
              </div>
              <div className="search_results_clild">
                <div className="search_res_img">
                  <img src="/gama_audios/album.jpg" alt="album" />
                </div>
                <div className="search_res_texts">
                  <p className="search_text_res">Title: Avicii The nights || sound cloud  </p>
                  <p className="search_text_res"> Views: 12M <button>Download</button>  <button>watch</button></p>
                </div>
              </div>
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
          </div>
          <div className="content-area how_to_use">
            <div className='explanations_download'>
              <h1>How to Use Gama Audios:</h1>
              <p><b>1. Find Your Video:</b> Enter the YouTube video title in the search box or paste the video link in the designated box.</p>
              <p><b>
                2. Download the Video:</b>Wait for up to 59 seconds, then click the download button to start downloading. If you want to preview the video first, click the watch button.
              </p>
              <p><b>3. Complete the Download:</b>The video will be downloaded to your system within <i>59</i>seconds.</p>
            </div>

            <br />
            <div>

              <div className="review_area">
                <h1 >Your reviews matters!</h1>
                <div>
                  <p style={{ marginRight: "20px" }}>Stars:</p>
                  <img src="/gama_audios/star.svg" />
                  <img src="/gama_audios/star.svg" />
                  <img src="/gama_audios/star.svg" />
                  <img src="/gama_audios/star.svg" />
                  <img src="/gama_audios/star.svg" />
                </div>
                <br />
                <div>
                  <textarea name="comment" id="comment" placeholder='Give us a feedback Or comment your Experience..' >
                  </textarea>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                  <input type="submit" style={{ width: "100px", height: "30px", }} />
                </div>
              </div>

            </div>
          </div>


        </div>
        <br />
        <br />
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>

    </>
  )
}

export default Home
