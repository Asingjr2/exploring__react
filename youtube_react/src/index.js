//  Create new first component.  Below code is considered JSX.
// Only parent component should be fetching data
import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail"
import _ from "lodash";

const API_KEY = "<your_key>";



class App extends Component{
  constructor(props){
    super(props);
    
    this.state = { 
      // Setting selected to blank since user has noty chosen video to see
      videoList: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");

  }
  
  // Function to handle passed search input data
  videoSearch(term){
    YTSearch({
      key: API_KEY, term: term}, (videos) => { 
        this.setState({ 
          videoList: videos, selectedVideo: videos[0] });
      });
  }

  render(){
    // Debounce delays wait time for search.  Debounce delays minimum wait time for func, e.g. 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 3000)

    return( 
      <div>
        <SearchBar onSearchTermChange={term=> this.videoSearch(term)} />
        <VideoDetail  video={this.state.selectedVideo} />
        <VideoList 
        video_results={this.state.videoList} 
        onVideoSelect={ selectedVideo => this.setState({selectedVideo})}  // Based on change event
        />
      </div>
    );
  }
}


// ReactDom has render function needed to support display of information
// Method takes several parameters with the last being div in which app is being placed
ReactDom.render(<App />, document.querySelector(".container"));
