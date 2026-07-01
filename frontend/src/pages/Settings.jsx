import {useEffect, useState } from "react";
import toast from "react-hot-toast";

import MainLayout from "../components/layout/MainLayout";

import "../styles/settings.css";



function Settings() {
  const [settings, setSettings] = useState({
    camera: "Default Camera",
    model: "YOLOv8n",
    confidence: 50,
    autoScreenshot: false,
    notifications: true,
   saveLocation: "screenshots/",
theme: "Dark",
refreshRate: 500,
reportFormat: "PDF",
  });
useEffect(() => {
  const saved = localStorage.getItem(
    "visionguard_settings"
  );

  if (saved) {
    setSettings(JSON.parse(saved));
  }
}, []);
  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveSettings = () => {
    localStorage.setItem(
      "visionguard_settings",
      JSON.stringify(settings)
    );

    toast.success("Settings saved successfully.");
  };

  return (
    <MainLayout>
      <div className="settings-page">

        <div className="settings-header">
          <h1>Application Settings</h1>
          <p>
            Configure VisionGuard AI according to your surveillance preferences.
          </p>
        </div>

        <div className="settings-grid">

          <div className="settings-card">

            <h2>Camera Configuration</h2>

            <div className="setting-item">
              <label>Camera</label>

              <select
                value={settings.camera}
                onChange={(e) =>
                  handleChange("camera", e.target.value)
                }
              >
                <option>Default Camera</option>
                <option>External Webcam</option>
              </select>
            </div>

            <div className="setting-item">

              <label>YOLO Model</label>

              <select
                value={settings.model}
                onChange={(e) =>
                  handleChange("model", e.target.value)
                }
              >
                <option>YOLOv8n</option>
                <option>YOLOv8s</option>
                <option>YOLOv8m</option>
              </select>

            </div>

            <div className="setting-item">

              <label>Confidence Threshold</label>

              <div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={settings.confidence}
                  onChange={(e) =>
                    handleChange(
                      "confidence",
                      Number(e.target.value)
                    )
                  }
                />

                <span className="range-value">
                  {settings.confidence}%
                </span>

              </div>

            </div>

          </div>

          <div className="settings-card">

            <h2>Detection Preferences</h2>

            <div className="setting-item">

              <label>Auto Screenshot</label>

              <input
                type="checkbox"
                className="switch"
                checked={settings.autoScreenshot}
                onChange={(e) =>
                  handleChange(
                    "autoScreenshot",
                    e.target.checked
                  )
                }
              />

            </div>
            <div className="settings-card">

  <h2>System Preferences</h2>

  <div className="setting-item">

    <label>Theme</label>

    <select
      value={settings.theme}
      onChange={(e) =>
        handleChange("theme", e.target.value)
      }
    >
      <option>Dark</option>
      <option>Light</option>
    </select>

  </div>

  <div className="setting-item">

    <label>Refresh Rate</label>

    <select
      value={settings.refreshRate}
      onChange={(e) =>
        handleChange(
          "refreshRate",
          Number(e.target.value)
        )
      }
    >
      <option value={250}>250 ms</option>
      <option value={500}>500 ms</option>
      <option value={1000}>1000 ms</option>
    </select>

  </div>

  <div className="setting-item">

    <label>Default Report Format</label>

    <select
      value={settings.reportFormat}
      onChange={(e) =>
        handleChange(
          "reportFormat",
          e.target.value
        )
      }
    >
      <option>PDF</option>
      <option>CSV</option>
    </select>

  </div>

</div>

            <div className="setting-item">

              <label>Notifications</label>

              <input
                type="checkbox"
                className="switch"
                checked={settings.notifications}
                onChange={(e) =>
                  handleChange(
                    "notifications",
                    e.target.checked
                  )
                }
              />

            </div>

            <div className="setting-item">

              <label>Save Location</label>

              <input
                type="text"
                value={settings.saveLocation}
                onChange={(e) =>
                  handleChange(
                    "saveLocation",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        </div>

        <div className="save-settings">

  <button onClick={saveSettings}>
    Save Configuration
  </button>

</div>

      </div>
    </MainLayout>
  );
}

export default Settings;