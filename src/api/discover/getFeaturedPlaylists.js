import createRequest from "./createRequest";

const getFeaturedPlaylists = () => {
  return createRequest("featured-playlists", "playlists");
};

export default getFeaturedPlaylists;
