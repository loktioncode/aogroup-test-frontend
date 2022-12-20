import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux-config/workThunk"

function Work() {
  const { all_photos, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    all_photos.length === 0 && dispatch(fetchPhotos());
    setPhotos(all_photos.slice(0, 9))
  }, [all_photos, dispatch]);


  if (loading !== "done") return <p>Loading...</p>

  const photosList = photos.map((item) => {
    return (
      <div class="w3-col l3 m6">
        <img src={item.url} style={{ width: "100%" }}  class="w3-hover-opacity" alt="A microphone"></img>
      </div>
    )
  });

  return (
    <div class="w3-container" id="work">
      <h3 class="w3-center">OUR WORK</h3>
      <p class="w3-center w3-large">What we've done for people</p>

      <div class="">
        {photosList}
      </div>
      <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
        <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" class="w3-image"></img>
          <p id="caption" class="w3-opacity w3-large"></p>
        </div>
      </div>
    </div>

  )
}

export default Work;