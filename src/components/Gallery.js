export function renderGallery() {
  return `
    <section id="gallery" class="gallery-section">
      <div class="gallery-container">
        <h2 class="gallery-title">Our Work</h2>
        <p class="gallery-description">Browse our gallery of before and after transformations.</p>

        <div class="gallery-grid">
          ${createGalleryItem(
            "https://images.pexels.com/photos/3807096/pexels-photo-3807096.jpeg",
            "Before and After 1",
            "Complete Restoration",
            "Full body restoration and paint job"
          )}
          ${createGalleryItem(
            "https://images.pexels.com/photos/3822850/pexels-photo-3822850.jpeg",
            "Before and After 2",
            "Collision Repair",
            "Front-end collision repair"
          )}
          ${createGalleryItem(
            "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg",
            "Before and After 3",
            "Custom Paint",
            "Premium metallic finish"
          )}
          ${createGalleryItem(
            "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg",
            "Before and After 4",
            "Body Work",
            "Expert panel replacement and repair"
          )}
          ${createGalleryItem(
            "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
            "Before and After 5",
            "Dent Removal",
            "Precision dent repair services"
          )}
          ${createGalleryItem(
            "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg",
            "Before and After 6",
            "Classic Restoration",
            "Vintage car restoration projects"
          )}
        </div>
      </div>
    </section>
  `;
}

function createGalleryItem(imageUrl, altText, title, description) {
  return `
    <div class="gallery-item">
      <div class="gallery-image-container">
        <img src="${imageUrl}" alt="${altText}" class="gallery-image">
      </div>
      <div class="gallery-item-details">
        <h3 class="gallery-item-title">${title}</h3>
        <p class="gallery-item-description">${description}</p>
      </div>
    </div>
  `;
}

















