import SubCarousel from "./subcarousel";

import useFetch from "./useFetch";

const Carousel = () => {
  const { data: music } = useFetch("http://localhost:8000/musician");
  return (
    <div className="subCarousel">{music && <SubCarousel music={music} />}</div>
  );
};

export default Carousel;
