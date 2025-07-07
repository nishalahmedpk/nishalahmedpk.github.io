// document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const skillsTitle = document.getElementById('skills-title');
    const skillsDescription = document.getElementById('skills-description');
    const skillsContent = document.querySelector('.skills-content');
    console.log(document.getElementById('skills-description').value);
    const skillDetails = {
        "HTML, CSS & Javascript": "I can use efficently use the three languages to create decent websites as the one you are viewing right now.",
        "Python": "I know the basics of python, how to exectute mySql queries in it and to create simple gui's using tkinter.",
        "C Language": "I know the basics of C."
    };
    let selectedskill = null;

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const skill = icon.getAttribute('data-skill');
            // console.log(`${skill} and ${skillsTitle.value}`);
            // if(skill!=skillsTitle.value) {
            
            // document.getElementById("cicons").style.visibility = 'hidden';

            // Add hidden class for fade-out
            skillsContent.classList.add('hidden');
        
            // Wait for the fade-out transition to complete before changing the content
            setTimeout(() => {
                skillsTitle.textContent = skill;
                skillsDescription.textContent = skillDetails[skill];
                // Remove hidden class for fade-in
                skillsContent.classList.remove('hidden');
            }, 500); // Match the transition duration
            icons.forEach(ic => {
                ic.classList.remove('clicked');
                if(ic.getAttribute('data-skill')==skill) {
                    ic.classList.add('clicked');
                }
            })

        // }
        })
    });
// });
