export function renderAbout() {
  return `
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">About Us</h2>
        <div class="about-content">
          <div class="about-text">
            <h3>Our Story</h3>
            <p>
              Classic Collision is dedicated to restoring your vehicle to its pre-accident condition with precision and care.
              Our expert technicians are highly trained in the latest repair techniques, ensuring top-quality results.
            </p>
            <p>
              We pride ourselves on our commitment to customer satisfaction. We use only the best materials and advanced
              equipment to ensure every repair meets the highest standards.
            </p>
          </div>
          <div class="about-image">
            <img src="public/classic-collisions-logo.png" alt="Classic Collision Logo" class="about-logo">
          </div>
        </div>
        <div class="our-values">
            <h3>Our Values</h3>
                <div class="values-grid">
                    <div class="value-card">
                        <i class="fas fa-star"></i>
                        <h4>Quality</h4>
                    </div>
                    <div class="value-card">
                        <i class="fas fa-users"></i>
                        <h4>Customer Focus</h4>
                    </div>
                    <div class="value-card">
                        <i class="fas fa-tools"></i>
                        <h4>Expertise</h4>
                    </div>
            </div>
        </div>
      </div>
    </section>
  `;
}
export function renderContact() {
  return `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-card">
              <div class="contact-icon">📍</div>
              <h3>Our Location</h3>
              <p>24400 Novi Rd Ste 105<br>Novi, MI, 48375</p>
            </div>
            <div class="contact-card">
              <div class="contact-icon">📞</div>
              <h3>Phone</h3>
              <p><a href="tel:+12487354505">(248) 735-4505</a></p>
            </div>
            <div class="contact-card">
              <div class="contact-icon">✉️</div>
              <h3>Email</h3>
              <p><a href="mailto:info@classiccollision.com">info@classiccollision.com</a></p>
            </div>
          </div>
          <div class="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.8885666896723!2d-83.47950182412868!3d42.48042373329202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ae51c383d087%3A0xbfc2d3ef3d5b9e36!2s24400%20Novi%20Rd%20%23105%2C%20Novi%2C%20MI%2048375!5e0!3m2!1sen!2sus!4v1713814675412!5m2!1sen!2sus"
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  `;
}