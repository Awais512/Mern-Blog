import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "react-circular-progressbar/dist/styles.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const useImageUpload = (initialFormData, onUploadComplete) => {
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);

  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      onUpload();
    }
  }, [imageFile]);

  const onUpload = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        console.log(error);
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );

        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUploading(false);
          onUploadComplete(downloadURL);
        });
      }
    );
  };

  const openFilePicker = () => {
    filePickerRef.current.click();
  };

  return {
    formData,
    imageFile,
    imageFileUrl,
    imageFileUploadProgress,
    imageFileUploadError,
    imageFileUploading,
    filePickerRef,
    handleImageChange,
    openFilePicker,
  };
};

useImageUpload.propTypes = {
  initialFormData: PropTypes.any.isRequired,
  onUploadComplete: PropTypes.func.isRequired,
};

export default useImageUpload;
