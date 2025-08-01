function getImageUrl(image_name) {
  return process.env.PUBLIC_URL + "/Images/" + image_name;
}
export { getImageUrl };
