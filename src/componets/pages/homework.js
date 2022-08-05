import React, { Component } from 'react';

export default class homework extends Component {
    render  () { 
        return (
            <div className="mp-container">
  
                <title>Music & Music Production</title>
                    <a href="MgroupArtist.html"></a>
                    <a href="MusicProducers.html"></a>
                    <a href="musicvids.html"></a>
                    <a href="MyMusic.html"></a>
                    <link rel="stylesheet" href="styles.css">
                    <script src="https://kit.fontawesome.com/792be14c13.js" crossorigin="anonymous"></script></link>

 
                    <div className="song">
                        Song Playing: Hip Hop Lives
                        Artist: KRS-1  Produced by: Marley Marl</div>
                    <div className="spacer20"></div>

{/* 
                    <div className="header"><!-- my 10 --></div>  */}

    {/* <style>
        body {
            background-image: url("simon-noh-0rmby-3OTeI-unsplash.jpg");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }
        
        .song {
            color: goldenrod;
            text-decoration: underline;
        }
    </style> */}


    <div className="links-wrapper">
        
        <div className="nav-link">
            <div className="icon">
                   {/* place icon here "fa-solid fa-record-vinyl" */}
                
                <div>
                    <p a href="musicvids.html">Music Videos</a>
                </div>
            </div>
        </div>



        <div className="nav-link">
            <div className="icon">
                {/* <icon className="fa-solid fa-headphones-simple"> */}
            </div>
            <div>
            <p a href="MusicProducers.html">Music Producers</p>
            </div>
        </div>

        <div className="nav-link">
            <div className="icon">
                {/* <i className="fab fa-creative-commons-sampling"></i> */}
            </div>
            <div>
            <p a href="MyMusic.html">My Music</p>
            </div>
        </div>

        <div className="nav-link">
            <div className="icon">
                {/* <i className="fa-solid fas fa-microphone-alt"></i> */}
            </div>
            
            <div className="song">
                <p a href="MgroupArtist.html"> The M.C.</p>
            </div>
        </div>
        
            <div audio src="/music/02-krs-one_and_marley_marl-hip_hop_lives.mp3" autoplay loop></div>
  
            <div className="footer"> <!-- import my footer from npm --></div>
        </div> 
        </div>
            
        );
    }
}

