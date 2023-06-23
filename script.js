
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
 
// JavaScript code for handling button clicks
document.getElementById('studentButton').addEventListener('click', function() {
  window.location.href = 'students.html'; 
});

document.getElementById('teacherButton').addEventListener('click', function() {
  window.location.href = 'teachers.html'; });

