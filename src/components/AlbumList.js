import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  /**
   * Lifecycle method
   * Invoked when the component is about to be rendered on the screen
   */
  componentWillMount() {
    // fetch data from the API
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
