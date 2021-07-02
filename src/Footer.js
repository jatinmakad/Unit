import React from 'react';
import "./Footer.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function footer() {
    return (
        <div className="footer">
             <div className="before">
                 <div className="first">
                       <div className="lang">
                           <h1>Language</h1>
                       </div>
                       <div className="language">
                          <h3>English</h3>
                          <h3>Deutsch</h3>
                          <h3>Marwadi</h3>
                          <h3>Hindi</h3>
                          <h3>Sanskrit</h3>
                          <h3>Francis</h3>
                          <h3>Protugues</h3>
                          <h3>CKMC</h3>
                          <h3>PKMC</h3>
                       </div>
                 </div>
                 <div className="second">
                     <h1>Social</h1>
                     <div className="ic">
                           <YouTubeIcon/>
                           <LinkedInIcon/>
                           <FacebookIcon/>
                           <InstagramIcon/>
                           <TwitterIcon/>
                     </div>
                 </div>
             </div>
            <div className="line"></div>
             <div className="after">
                 <ul >
                     <li>Purchase</li>
                     <li>Products</li>
                     <li>Unity Ads</li>
                     <li>Subscription</li>
                     <li>Assest Store</li>
                     <li>Resellers</li>
                 </ul>
                 <ul>
                     <li>Eduction</li>
                     <li>Students </li>
                     <li>Educators</li>
                     <li>Certification</li>
                     <li>Learn</li>
                     <li>Center of Excellence</li>
                 </ul>
                 <ul>
                     <li>Download</li>
                     <li>Get Unity</li>
                     <li>Download Archives</li>
                     <li>Bete Programs</li>
                 </ul>
                 <ul>
                     <li>Unity Labs</li>
                     <li>Labs</li>
                     <li>Publication</li>
                 </ul>
                 <ul>
                     <li>Resources</li>
                     <li>Learn Platform</li>
                     <li>Community</li>
                     <li>Documentation</li>
                     <li>Unity Q&A</li>
                     <li>FAQ</li>
                     <li>Services Status</li>
                     <li>Conncets</li>
                     <li>Case Studies</li>
                 </ul>
                 <ul>
                     <li>Unity</li>
                     <li>Our Company</li>
                     <li>NewsLetter</li>
                     <li>Blog</li>
                     <li>Events</li>
                     <li>Carrers</li>
                     <li>Help</li>
                     <li>Press</li>
                     <li>Partner</li>
                     <li>Investors</li>
                     <li>Security</li>
                 </ul>
             </div>
        </div>
    )
}

export default footer
