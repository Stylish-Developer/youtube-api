// --> video list component
const VideoList = (props) => {
  const { videosResponse, emptyHeading } = props;

  const count = videosResponse.length;
  let heading = emptyHeading;

  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }

  console.log('---------------response---------------',videosResponse);
  return (
    <>
      <h2>{heading}</h2>
      {[videosResponse].map((video) => (
        <p key={video.id}> {video.title} </p>
      ))}
    </>
  );
};

export default VideoList;
