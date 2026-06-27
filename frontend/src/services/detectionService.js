import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const detectImage = async (image) => {

    const formData = new FormData();

    formData.append("image", image);

    const response = await axios.post(

        `${API}/detect/image`,

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

    return response.data;

};