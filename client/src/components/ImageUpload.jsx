import PropTypes from "prop-types";
import { Alert } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useImageUpload from "../hooks/useImageUpload"; // Import the custom hook

import { useSelector } from "react-redux";

const ImageUpload = ({ formData, setFormData, setImageFileUploading }) => {
  const { currentUser } = useSelector((state) => state.user);

  const {
    formData: hookFormData,
    imageFileUrl,
    imageFileUploadProgress,
    imageFileUploadError,

    filePickerRef,
    handleImageChange,
    openFilePicker,
  } = useImageUpload(formData, (downloadURL) => {
    setFormData({ ...hookFormData, profilePicture: downloadURL });
    setImageFileUploading(false);
  });

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={filePickerRef}
        hidden
      />
      <div
        className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
        onClick={openFilePicker}
      >
        {imageFileUploadProgress && (
          <CircularProgressbar
            value={imageFileUploadProgress || 0}
            text={`${imageFileUploadProgress}%`}
            strokeWidth={5}
            styles={{
              root: {
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              },
              path: {
                stroke: `rgba(62, 152, 199, ${imageFileUploadProgress / 100})`,
              },
            }}
          />
        )}
        <img
          src={imageFileUrl || currentUser.profilePicture}
          alt="user"
          className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
            imageFileUploadProgress &&
            imageFileUploadProgress < 100 &&
            "opacity-60"
          }`}
        />
      </div>
      {imageFileUploadError && (
        <Alert color="failure">{imageFileUploadError}</Alert>
      )}
    </>
  );
};

ImageUpload.propTypes = {
  formData: PropTypes.any.isRequired,
  setFormData: PropTypes.func.isRequired,
  setImageFileUploading: PropTypes.func.isRequired,
};

export default ImageUpload;
