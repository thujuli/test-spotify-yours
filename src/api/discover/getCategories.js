import createRequest from "./createRequest";

const getCategories = () => {
  return createRequest("categories", "categories");
};

export default getCategories;
