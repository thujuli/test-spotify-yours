import createRequest from "./createRequest";

const getNewReleases = () => {
  return createRequest("new-releases", "albums");
};

export default getNewReleases;
