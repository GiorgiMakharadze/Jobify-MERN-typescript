const Loading = ({ center }: { center: any }) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};

export default Loading;
