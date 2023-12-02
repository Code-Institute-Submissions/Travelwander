
        
        function toggleNav() {
          const sidebar = document.querySelector(".sidebar");
  
          sidebar.classList.toggle("active");
        }
        function closeNav() {
          const sidebar = document.querySelector(".sidebar");
          sidebar.classList.remove("active");
        }
        document.querySelector('.cross').addEventListener('click',closeNav);
        
