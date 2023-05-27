import "./App.css";
import { useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [load, setload] = useState(false);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setload(false)
      alert('Image uploaded')
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url)
      });
    });
  };

 

  return (
    <div className="App flex justify-center">
      <input className="bg-white"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button className="text-white bg-green-400 mt-5 " onClick={uploadFile}> Upload Image</button>
      {load && <h1 className="mt-5 text-white" >Uploading ...</h1>}
      {imageUrls && <h1 className="mt-5 text-white" >{imageUrls}</h1>}
    </div>
  );
}

export default App;
