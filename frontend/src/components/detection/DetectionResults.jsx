function DetectionResults({ result }) {
  return (
    <div className="upload-card">

      <h2>Detection Results</h2>

      <h3>Total Objects : {result.count}</h3>

      <img
        src={`http://127.0.0.1:5000/${result.annotated_image}`}
        alt="Detected"
        className="preview-image"
      />

      <div className="object-list">

        {result.objects.map((object, index) => (

          <div
            className="object-item"
            key={index}
          >

            <strong>{object.class}</strong>

            <span>{object.confidence}%</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DetectionResults;