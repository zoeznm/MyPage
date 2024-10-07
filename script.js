// 스크롤 시 부드러운 이동 효과
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });
});
