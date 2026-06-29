import {
  FiCamera,
  FiUpload,
  FiVideo,
  FiDownload,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { startCamera } from "../../services/webcamService";
import { exportCSV } from "../../services/analyticsService";

function QuickActions() {

  const navigate = useNavigate();
const handleStartCamera = async () => {

  try {

    await startCamera();

    toast.success("Camera Started");

    navigate("/live-detection");

  } catch (err) {

    console.error(err);

    toast.error("Unable to start camera");

  }

};

  const handleUploadImage = () => {

    navigate("/image-detection");

  };

  const handleUploadVideo = () => {

    toast("Video Detection Coming Soon");

  };

  const handleExportCSV = async () => {

    try {

      const response = await exportCSV();

      const url = window.URL.createObjectURL(
        response.data
      );

      const link = document.createElement("a");

      link.href = url;

      link.download = "visionguard_report.csv";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("CSV Downloaded");

    } catch (err) {

      console.error(err);

      toast.error("Unable to export CSV");

    }

  };

  return (

    <div className="quick-card">

      <div className="card-header">

        <h3>Quick Actions</h3>

      </div>

      <div className="quick-grid">

        <button onClick={handleStartCamera}>

          <FiCamera />

          Start Camera

        </button>

        <button onClick={handleUploadImage}>

          <FiUpload />

          Upload Image

        </button>

        <button
          onClick={handleUploadVideo}
          disabled
        >

          <FiVideo />

          Upload Video

        </button>

        <button onClick={handleExportCSV}>

          <FiDownload />

          Export CSV

        </button>

      </div>

    </div>

  );

}

export default QuickActions;