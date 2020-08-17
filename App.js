import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';
import YouTube from 'react-youtube';

const opts={
  height: "390",
  width: "100%",
  playerVars: {
      autoplay: 1, 
  },
};

function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner/>
    <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow/>
    <Row title='Trending Now'fetchUrl={requests.fetchTrendingNow}/> 
    <Row title='Top Rated'fetchUrl={requests.fetchTopRated}/> 
    <Row title='Action Movies'fetchUrl={requests.fetchActionMovies}/>
    <YouTube  videoId='rtGIq9Xjnrw' opts={opts}/> 
    <Row title='Comedy Movies'fetchUrl={requests.fetchComedyMovies}/> 
    <Row title='Horror Movies 'fetchUrl={requests.fetchHorrorMovies}/> 
    <Row title='Romantic Movies'fetchUrl={requests.fetchRomanticMovies}/> 

    </div>
  );
}

export default App;
