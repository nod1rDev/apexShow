function Video() {
  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{  color: "#333" }}
        className="font-bold text-[2rem] leading-[1.6rem] md:text-[3rem] md:leading-[2.6rem] mt-[10rem]"
      >
        Training Video
      </h1>
      <br />
      <p className=" md:text-[1rem]" style={{ fontSize: "0.8rem", marginBottom: "20px", color: "#555" }}>
        Watch comprehensive training materials and tutorials
      </p>
      <video
        style={{
     
          maxHeight: "500px",
          borderRadius: "10px",
          border: "2px",
          borderColor: "black",
        }}
        className="mx-auto w-[100%] md:w-[60%]"
        controls
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ marginTop: "20px" }}>
        <a
          href="/video.mp4"
          download
          style={{
            display: "inline-block",
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Download Video
        </a>
      </div>
    </div>
  );
}

export default Video;
