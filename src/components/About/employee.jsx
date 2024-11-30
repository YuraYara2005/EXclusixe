import React from 'react';
import './employee.css';
import employee1 from '../../assets/images/Frame874.png';
import employee2 from '../../assets/images/Frame875.png';
import employee3 from '../../assets/images/Frame876.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const employees = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: employee1,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: employee2,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: employee3,
    socialLinks: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Employee = () => {
  return (
    <div className="grid-system mt-5">
      {employees.map((employee, index) => (
        <div key={index} className="card cardo">
          <img src={employee.img} className="card-img-top" alt={employee.name} />
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">{employee.role}</p>
            <div className="icons-grid">
              <a href={employee.socialLinks.twitter} className="icon-button">
                <TwitterIcon />
              </a>
              <a href={employee.socialLinks.instagram} className="icon-button">
                <InstagramIcon />
              </a>
              <a href={employee.socialLinks.linkedin} className="icon-button">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employee;
