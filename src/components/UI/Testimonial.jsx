import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      quote:
        "I rented a Tesla Malibu for a weekend trip, and it was an incredible experience. The car's performance and comfort exceeded my expectations.",
      name: "Jessica Smith",
      designation: "Customer",
      img: ava01,
    },
    {
      quote:
        "My experience with the Toyota Aventador was outstanding. The car's smooth handling and advanced features made my journey comfortable and enjoyable.",
      name: "Michael Johnson",
      designation: "Customer",
      img: ava02,
    },
    {
      quote:
        "The BMW X3 provided a luxurious and convenient ride for our family vacation. Its spacious interior and advanced navigation system made our trip truly memorable.",
      name: "Emily Williams",
      designation: "Customer",
      img: ava03,
    },
    {
      quote:
        "Renting the Nissan Mercielago was the best decision for my business trip. Its sleek design and powerful engine added a touch of elegance to my travels.",
      name: "Christopher Davis",
      designation: "Customer",
      img: ava04,
    },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <p className="section__description">{testimonial.quote}</p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-25 h-25 rounded-2"
            />

            <div>
              <h6 className="mb-0 mt-3">{testimonial.name}</h6>
              <p className="section__description">{testimonial.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
