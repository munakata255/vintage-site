
// Home animation
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.nav-card');
  if(card){
    // add small delay for a 'powa' rise-in feel
    setTimeout(() => card.classList.add('show'), 180);
  }
});
