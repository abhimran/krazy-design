import React, { useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';

const MultiImage = () => {
     const [selectedFiles, setSelectedFiles] = useState([]);

     const handleDelete = (id) =>{
         const temp = [...selectedFiles];
         temp.splice(id, 1);
         setSelectedFiles(temp)
     }

     const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  const renderPhotos = (source) => {
    // console.log("source: ", source);
    return source.map((photo, i) => {
      return (
        <div className="single-img">
            <img src={photo} alt="" key={photo} className={`result-img`}/>
            <FaRegWindowClose onClick={()=>handleDelete(i)}/>
        </div>
      );
    });
  };
    return (
        <section className="multiImage">
            <div className="container">
                <div className="multiImage-upload">
                    <h2>Upload Multiple Images</h2>
                    <label htmlFor="file" className="label">
                         <input type="file" id="file" multiple onChange={handleImageChange} />
                    </label>
                </div>
                 <div className="result">
                     {renderPhotos(selectedFiles)}
                </div>
                 
            </div>
        </section>
    );
};

export default MultiImage;