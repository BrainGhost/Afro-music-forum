import { Link } from "react-router-dom";
import Slider from "react-slick";
const SubCarousel = (props) => {
  const musician = props.music;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="musicList">
      <Slider {...settings}>
        {musician.map((musician) => (
          <div className="items" key={musician.id}>
            <Link to={`/musician/${musician.id}`}>
              <img src={musician.image} alt="l" />
              <h3>{musician.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SubCarousel;
