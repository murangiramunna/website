function toggleDarkMode() {
    const body = document.querySelector('body');
    const headerFooter = document.querySelectorAll('header, footer');
    const products = document.querySelectorAll('.product');
  
    body.classList.toggle('dark');
    headerFooter.forEach(element => element.classList.toggle('dark'));
    products.forEach(element => element.classList.toggle('dark'));
  }
  