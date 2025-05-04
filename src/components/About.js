export function renderAbout() {
  return `
    <section id="about" class="section about-section">
      <div class="about-container">
        <h2 class="section-title about-title">About Us</h2>
        <div class="about-content-container">
          <div class="about-content">
            <div class="about-text">
              <p>
                Founded with a passion for automotive excellence, Classic Collision
                has been Novi's premier destination for collision repair and
                restoration for over 15 years. Our commitment to quality and
                customer satisfaction has made us the trusted choice for vehicle
                repairs in the community.
              </p>
              <p>
                Our team of certified technicians brings decades of combined
                experience to every project, ensuring your vehicle receives the
                highest standard of care and craftsmanship.
              </p>
            </div>
          </div>
        </div>

        <div class="team-section">
          <h3>Meet Our Expert Team</h3>
          <div class="team-container">
            <div class="team-slider-container">
              <button class="team-nav prev" aria-label="Previous">❮</button>
              <div class="team-slider">
                <div class="team-member">
                  <img src="https://images.pexels.com/photos/8989464/pexels-photo-8989464.jpeg" alt="John Smith" loading="lazy">
                  <h4>John Smith</h4>
                  <p>Master Technician</p>
                </div>
                <div class="team-member">
                  <img src="https://images.pexels.com/photos/8989470/pexels-photo-8989470.jpeg" alt="Mike Johnson" loading="lazy">
                  <h4>Mike Johnson</h4>
                  <p>Paint Specialist</p>
                </div>
                <div class="team-member">
                  <img src="https://images.pexels.com/photos/8989472/pexels-photo-8989472.jpeg" alt="David Wilson" loading="lazy">
                  <h4>David Wilson</h4>
                  <p>Body Work Expert</p>
                </div>
                <div class="team-member">
                  <img src="https://images.pexels.com/photos/8989475/pexels-photo-8989475.jpeg" alt="Robert Taylor" loading="lazy">
                  <h4>Robert Taylor</h4>
                  <p>Restoration Specialist</p>
                </div>
              </div>
              <button class="team-nav next" aria-label="Next">❯</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}