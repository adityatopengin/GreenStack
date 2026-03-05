// Function to handle the "Float Up" entrance animation
const initAnimations = () => {
    // Select all the bento grid sections we want to animate
    const sections = document.querySelectorAll('section');

    // Define the "Observer" - the eye that watches the scroll position
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the CSS class that triggers the animation
                entry.target.classList.add('visible');
                // Once it has animated in, we stop watching it
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Tell the observer to watch every section
    sections.forEach(section => {
        // Add the initial "hidden" state
        section.classList.add('reveal-on-scroll');
        observer.observe(section);
    });
};

// Run the animations once the components have been injected
document.addEventListener('DOMContentLoaded', () => {
    // We wait a tiny bit to make sure components.js finished its job
    setTimeout(initAnimations, 100);
});
