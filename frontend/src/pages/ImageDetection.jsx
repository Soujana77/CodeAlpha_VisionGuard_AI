import MainLayout from "../components/layout/MainLayout";
import ImageUpload from "../components/detection/ImageUpload";

function ImageDetection() {

    return (

        <MainLayout>

            <div className="dashboard-header">

                <h1>Image Detection</h1>

                <p>

                    Upload an image and let VisionGuard AI detect objects.

                </p>

            </div>

            <ImageUpload />

        </MainLayout>

    );

}

export default ImageDetection;