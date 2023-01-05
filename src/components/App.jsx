import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

const App = () => {
  const [vList, setVList] = React.useState([]);
  const [currentVideo, setCurrentVideo] = React.useState(exampleVideoData[0]);

  const searchYT = function(query) {
    searchYouTube(query, (results) => {
      setVList(results);
      setCurrentVideo(results[0]);
    });
  };

  React.useEffect(() => searchYT('cats'), []); // searches when pages loads, then empty arr makes sure it only runs once

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search handleChange={searchYT}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={currentVideo}/></div>
        </div>
        <div className="col-md-5">
          <VideoList videos={vList} manageClick={setCurrentVideo}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
