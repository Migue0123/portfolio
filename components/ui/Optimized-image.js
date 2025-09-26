class OptimizedImage extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src");
    const alt = this.getAttribute("alt");

    this.innerHTML = `
      <picture>
        <source srcset="assets/images/${src}.webp" type="image/webp">
        <source srcset="assets/images/${src}.png" type="image/png">
        <img src="assets/images/${src}.png" alt="${alt}" loading="lazy">
      </picture>
    `;
  }
}
customElements.define("optimized-image", OptimizedImage);
