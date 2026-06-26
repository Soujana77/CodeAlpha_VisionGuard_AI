import {
  FiCamera,
  FiUpload,
  FiVideo,
  FiDownload,
} from "react-icons/fi";

function QuickActions() {
  return (
    <div className="quick-card">
      <div className="card-header">
        <h3>Quick Actions</h3>
      </div>

      <div className="quick-grid">
        <button>
          <FiCamera />
          Start Camera
        </button>

        <button>
          <FiUpload />
          Upload Image
        </button>

        <button>
          <FiVideo />
          Upload Video
        </button>

        <button>
          <FiDownload />
          Export CSV
        </button>
      </div>
    </div>
  );
}

export default QuickActions;