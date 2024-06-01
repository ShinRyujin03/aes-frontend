import './footer.css';
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img src="logo.svg" alt="Logo" className="footer-logo" />
          <p>Automated IELTS Scoring</p>
          <p>&copy; 2024 Writing9. All rights reserved.</p>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#">How does it work?</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Scholarship</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>IELTS Task 2 Topics</h3>
          <ul>
            <li><a href="#">Latest Topics (May & June)</a></li>
            <li><a href="#">Opinion topics</a></li>
            <li><a href="#">Discussion topics</a></li>
            <li><a href="#">Problem and solution topics</a></li>
            <li><a href="#">Advantages and disadvantages topics</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact us</a></li>
          </ul>
          <h3>IELTS Task 2 Samples</h3>
          <ul>
            <li><a href="#">Latest Samples</a></li>
            <li><a href="#">Samples Band 6</a></li>
            <li><a href="#">Samples Band 6.5</a></li>
            <li><a href="#">Samples Band 7</a></li>
            <li><a href="#">Samples Band 7.5</a></li>
            <li><a href="#">Samples Band 8</a></li>
            <li><a href="#">Samples Band 8.5</a></li>
            <li><a href="#">Samples Band 9</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>DMCA Policy</h3>
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
