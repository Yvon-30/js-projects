document.addEventListener('DOMContentLoaded', () => {
    // Highlight the selected project when clicked
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all items
            projectItems.forEach(i => i.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');
        });
    });

    // Smooth scroll to section when nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show a tooltip on hover for project descriptions
    const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });
});