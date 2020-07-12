import React from "react";

const cardContents = [
  {
    name: "Glasgow",
    img: "https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg",
    text:
      "As Scotland's biggest city, you're truly spoilt for choice when it comes to filling your itinerary with all the things to do in Glasgow",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    name: "Manchester",
    img:
      "https://embedwistia-a.akamaihd.net/deliveries/0a753553e6fe2ea637ece53f983cb8c1.webp?image_crop_resized=1280x750",
    text:
      "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK",
    link: "https://www.visitmanchester.com/"
  },
  {
    name: "London",
    img:
      "https://cdn.londonandpartners.com/visit/generic/objects/91169-640x360-101-image-640.jpg",
    text:
      "Visit London, enjoy the city’s fantastic sights and events, and make the most of the fabulous host of things to do in London",
    link: "https://visitlondon.com/"
  }
];

const TourisrticInfoCards = () => {
  return (
    <div className="card-container">
      {cardContents.map(card => {
        return (
          <div className="card">
            <img src={card.img} className="card-img-top" />
            <div className="card-body">
              <p>{card.text}</p>
              <a href={card.link} target="_blank" className="btn btn-primary">
                {card.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TourisrticInfoCards;