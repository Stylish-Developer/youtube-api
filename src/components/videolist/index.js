// --> video list component
const VideoList = (props) => {
  const { videosResponse, receiveHandler } = props;

  console.log(videosResponse);
  const handleChange = (id) => {
    receiveHandler(id);
  };
  return (
    <>
      {videosResponse?.items?.map((value, i) => {
        return (
          <div
            key={i}
            onClick={() => handleChange(value.id)}
            style={{
              marginBottom: 10,
              marginTop: 10,
              cursor: "pointer",
              display: "flex",
              justifyContent:'center'
            }}
          >
            <div>
              <img
                src={value.bestThumbnail?.url}
                alt={"thumbnail"}
                height={100}
                width={100}
              />
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>{value.title}</p>
              <p>{value.author?.name}</p>
              <div>
                <p>views: {value.views}</p>
                <p>uploadedAt: {value.uploadedAt}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoList;
