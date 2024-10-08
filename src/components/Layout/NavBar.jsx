import React, { useState } from "react";
import "./NavBar.css";
import logogreen from "../../Assets/Images/logo/shadowGreen.png";
// import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import Bottombar from "./Bottombar";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";

const NavBar = () => {
  const [appointmentForm, setAppointmentForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    specialty: ""
  });
  const [view, setView] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date, specialty } = formData;

    const message = `Appointment Request\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nSpecialty: ${specialty}`;
    const whatsappUrl = `https://wa.me/+919562465095/?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  const handleForm = () => {
    setAppointmentForm(!appointmentForm);
  };
  return (
    <div>
      <div className="navWrapper">
        <div className="Navleft">
          <img
            src={logogreen}
            alt=""
            className=""
            onClick={() => {
              setView(!view);
            }}
          />

          <div className="Name">
            <span className="Velayudha">Velayudha</span>
            <span className="pharma">pharmacy & Clinic</span>
          </div>
        </div>
        <div className="navRight">
          <div className="icons">
            <a href="https://www.google.com/maps/place/9%C2%B059'24.5%22N+76%C2%B017'26.7%22E/@9.9901442,76.2881751,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.9901389!4d76.29075?entry=ttu">

              <FaLocationDot className="contactIcon" />
            </a>
            <a href="https://wa.me/+919562465095/?text=let me know more about Velayudha Pharmacy and Clinic">
              <FaSquareWhatsapp className="contactIcon" />
            </a>
            <a href="https://www.instagram.com/velayudha_pharmacy">
              <FaInstagramSquare className="contactIcon" />
            </a>

            <FaPenToSquare
              className="contactIcon"
              onClick={handleForm}
            />

          </div>
        </div>
      </div>
      {appointmentForm ? (
        <div className="appointmen-main">
          <div className="appointment-form-container">
            <IoClose className="closeButton" onClick={handleForm} />
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="specialty">Doctor's Specialty</label>
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Specialty</option>
                  <option value="general">General Physician</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="dermatologist">Dermatologist</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : null}
      <Bottombar />
      {view ? (
        <div className="list2">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/About"}>
            <li>About Us</li>
          </Link>
          <Link to={"/services"}>
            <li>Service</li>
          </Link>

          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;