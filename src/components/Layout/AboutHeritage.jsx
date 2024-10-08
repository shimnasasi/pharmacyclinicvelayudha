import React from "react";
import "./AboutHeritage.css";
import LegacyCard from "./LegacyCard";
import img1 from "../../Assets/Images/legacy/1.png";
import img2 from "../../Assets/Images/legacy/2.png";
import img3 from "../../Assets/Images/legacy/3.png";

function AboutHeritage() {
  const legecyinfo = [
    {
      name: "Kolunny vaidyar  ",
      image: img2,
      period: "1948-1988",
      details:
        "With a deep understanding of the ancient wisdom of Ayurveda and a passion for healing, Kolunny Vaidyar has dedicated his life to helping others achieve balance and harmony Through his tireless efforts, Kolunny Vaidyar has become a beacon of hope for those seeking a more natural approach to healthcare, and his clinic continues to thrive as a haven for holistic wellness"
    
      },
    {
      // name: "Kolunny vaidyar  ",
      name: "Velayudhan vaidyar",
      image: img1,
      period: "1948-1988",
      details:
        "The proud son of renowned Ayurvedic practitioner Kolunny Vaidyar, who has carried forward his father's legacy with dedication and passion in his entire career. Following in his father's footsteps, Velayudha Vaidyar has expanded the family's traditional Ayurvedic practice, expanding Velayudha Pharmacy and Clinic as a beacon of holistic wellness."
    },

    {
      name: "Dr.V.Venugopal BAMS",
      image: img3,
      period: "1948-1988",
      details:
        "Harmoniously blended ancient Ayurvedic wisdom with modern healthcare practices, creating a unique and holistic approach to wellness. Velayudha Pharmacy and Clinic, named in honor of his father, stands as a testament to Dr. Venugopal's commitment to excellence and his dedication to carrying forward the his family's tradition of compassionate care."
    }
  ];
  return (
    <div>
      <div className="AboutHeritagetop">
        <span className="heritage"> Our Heritage</span>
        <p className="AboutHeritagepara">
          Founded by the visionary Kolunny vaidyar, our clinic has a
          long-standing history of providing authentic Ayurvedic treatments.
          From a modest beginning, we have grown into a trusted name in
          Ayurveda, committed to the principles of natural healing and overall
          well-being.
        </p>
        <div className="cardsLegacyheritage">
          {legecyinfo.map((list) => (
            <LegacyCard
              name={list.name}
              details={list.details}
              image={list.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutHeritage;
