import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import toast from "react-hot-toast";

import { detectImage } from "../../services/detectionService";
import DetectionResults from "./DetectionResults";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleDetection = async () => {
    if (!selectedImage) {
      toast.error("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      const response = await detectImage(selectedImage);

      setResult(response.data);

      toast.success("Detection completed successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Detection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="upload-card">

        <h2>Upload Image</h2>

        <p>Select an image to detect objects using YOLOv8.</p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {preview && (
          <div className="preview-container">

            <img
              src={preview}
              alt="Preview"
              className="preview-image"
            />

          </div>
        )}

        <button
          className="detect-btn"
          onClick={handleDetection}
          disabled={loading}
        >
          <FiUploadCloud />

          {loading ? "Detecting..." : "Detect Objects"}
        </button>

      </div>

      {result && (
        <DetectionResults
          result={result}
        />
      )}
    </>
  );
}

export default ImageUpload;