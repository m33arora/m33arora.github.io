// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Content Loader
const sections = document.querySelectorAll('.dynamic-content');

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        const contentId = section.getAttribute('data-content');
        const content = document.getElementById(contentId);
        content.classList.add('active');
    });

    section.addEventListener('mouseout', () => {
        const contentId = section.getAttribute('data-content');
        const content = document.getElementById(contentId);
        content.classList.remove('active');
    });
});

// Interactive Skills Grid
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.classList.add('highlight');
    });

    skill.addEventListener('mouseout', () => {
        skill.classList.remove('highlight');
    });
});

// Dark/Light Mode Toggle
const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Modal Pop-up
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
    });
});

// Close Modal
const closeModalButtons = document.querySelectorAll('.close-modal');

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('active');
    });
});

// Close modal on clicking outside
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
