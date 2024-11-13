function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

   
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        if (link.textContent.toLowerCase() === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


function submitFeedback(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
}

// Initialize default view
showSection('home');
