import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux-config/workThunk"

function Work() {
  const { all_photos, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const [photos , setPhotos] = React.useState([]);

  React.useEffect(() => {
    all_photos.length === 0 && dispatch(fetchPhotos());
    setPhotos(all_photos.slice(0, 9))

    console.log(">y>", all_photos);
  }, [all_photos, dispatch]);


  if (loading !== "done") return <p>Loading...</p>

  const photosList = photos.map((item) => {
    return (<p>{item.title}</p>);
  });

  return <>
    <h1>{photosList}</h1>
  </>;
}

export default Work;