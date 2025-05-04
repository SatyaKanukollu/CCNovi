export function renderServices() {
    return `
      <section id="services" class="section">
        <div class="container">
          <h2 class="section-title">Our Services</h2>
          <p class="section-description">At Classic Collision, we offer comprehensive automotive repair services with the highest quality standards and customer satisfaction.</p>
          
          <div class="services-grid">
            ${createServiceCard(
              "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
              "Collision Repair",
              "Expert repair services for vehicles involved in accidents. We restore your car to pre-accident condition."
            )}
            ${createServiceCard(
              "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg",
              "Auto Body Work",
              "Complete auto body services including dent removal and panel replacement."
            )}
            ${createServiceCard(
              "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg",
              "Paint Services",
              "Premium paint services with computerized color matching for a flawless finish."
            )}
          </div>
        </div>
      </section>
    `;
  }
  
  function createServiceCard(imageUrl, title, description) {
    return `
      <div class="service-card">
        <div class="service-image-container">
          <img class="service-image" src="${imageUrl}" alt="${title}" loading="lazy">
        </div>
        <div class="service-content">
          <h3 class="service-title">${title}</h3>
          <p class="service-description">${description}</p>
          <button class="btn-text service-learn-more">Learn more</button>
        </div>
      </div>
    `;
  }




  
  
  
  
  
  
  
  
  
  
  
  

}