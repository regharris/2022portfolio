import React from "react";
var tempDate = new Date();
var date =
  tempDate.getFullYear() +
  "-" +
  (tempDate.getMonth() + 1) +
  "-" +
  tempDate.getDate()
var currDate = date;

const Footer = () => {
  return (
    <div id="footer-bar">
           <p>
          <b id="regemail">Email:</b>
          <br></br>regharris0504@gmail.com
        </p>
        <p>
          <b>Mobile:</b>
          <br></br>704-309-6768
        </p>
        <a href="https://github.com/regharris">Github</a>
        <br></br>
        <a href="https://www.linkedin.com/in/reginald-harris-7147a7194?trk=people-guest_profile-result-card_result-card_full-click">
          LinkedIn
        </a>
      <section id="copyright">© Copyright 2019 </section>
      <section id="update-footer">Last Updated: {currDate}</section>
    </div>
  );
};
export default Footer;
