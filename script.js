document.addEventListener('DOMContentLoaded', function () {
    // Sticky navbar on scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('Sticky');
        } else {
            navbar.classList.remove('Sticky');
        }
    });

    // Mobile menu
    const navLinks = document.querySelectorAll(".menu .nav-link");
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menucloseButton = document.querySelector("#menu-close-button");

    menuOpenButton?.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-view");
    });

    menucloseButton?.addEventListener("click", () => menuOpenButton.click());

    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    });

    // Services data
    const services = [
        { id: `item-1`, icone: `fas fa-mosque`, header: `Islamiyyah Section`, descrioption: `Creative problem-solver with a passion for turning into stunning visuals. Specialzing in branding, digital design, and visual storytelling that speaks louder than words ever could.` },
        { id: `item-2`, icone: `fas fa-graduation-cap`, header: `Western Education`, descrioption: `Passionate web dev crafting fast, functional & visually engaging websites. responsive designs, seamless user experiences, bringing ideas to life with clean code and creative thinking.` },
        { id: `item-3`, icone: `fa-solid fa-book`, header: `Tahfeez Section`, descrioption: `Reliable and results-driven printing solutions for businesses and creatives. From business cards to banners, I deliver hight-quality prints with precision, speed, and style.` }
    ];
    let innerHTML = '';
    services.forEach((service) => {
        innerHTML += `
        <li class="item ${service.id}">
            <i class="${service.icone}"></i>
            <h4>${service.header}</h4>
            <p>${service.descrioption}</p>
        </li>
        `;
    });
    const menuContainer = document.querySelector(".js-menu");
    if (menuContainer) menuContainer.innerHTML = innerHTML;

    // Skills HTML (if you have a container for skills)
    const skills = [
        { name: `HTML`, levelPercentage: `fifty-percent` },
        { name: `CSS`, levelPercentage: `thirty-percent` },
        { name: `JAVASCRIPT`, levelPercentage: `twenty-percent` },
        { name: `CORELDRAW`, levelPercentage: `sixty-percent` },
        { name: `PHOTOSHOP`, levelPercentage: `forty-percent` }
    ];
    let levelHTML = '';
    skills.forEach((skill) => {
        levelHTML += `
        <div class="skill">
            <p>${skill.name}</p>
            <div class="level-container">
                <span class="${skill.levelPercentage}"></span>  
            </div>
        </div>
        `;
    });
    // If you have a container for skills, set its innerHTML here

    // Team HTML
    const myTeam = [
        { image: `joel.JPG`, name: `Muhammad Ghaddafi Umar`, post: `General Manager` },
        { image: `Mary.JPG`, name: `Ahmad Sherifat Ovayoza`, post: `UI/UX Designer` },
        { image: `john.JPG`, name: `Muhammad Usman Bindawa`, post: `Senior Developer` },
        { image: `stephen.JPG`, name: `Muhammad Bashir Alhassan`, post: `Senior Developer` },
        { image: `me.png`, name: `Ibrahim Hanif Shuaibu`, post: `Junior Developer` },
        { image: `Usama.JPG`, name: `Usama Muhammad`, post: `Junior Developer` }
    ];
    let teamHTML = '';
    myTeam.forEach((member) => {
        teamHTML += `
        <div class="team-member">
            <div class="image-wrapper">
                <img src="images/${member.image}" alt="">
            </div>
            <h3 limit-text-to-2-lines>${member.name}</h3>
            <i>${member.post}</i>
        </div>
        `;
    });
    const teamContainer = document.querySelector('.js-team');
    if (teamContainer) teamContainer.innerHTML = teamHTML;

    // News share dropdown
    function closeAllShareMenus() {
        document.querySelectorAll('.share-dropdown').forEach(drop => drop.classList.remove('active'));
    }

    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeAllShareMenus();
            this.parentElement.classList.toggle('active');
        });
        btn.addEventListener('touchstart', function (e) {
            e.stopPropagation();
            closeAllShareMenus();
            this.parentElement.classList.toggle('active');
        });
    });

    document.addEventListener('click', closeAllShareMenus);
    document.addEventListener('touchstart', closeAllShareMenus);

    // Like button
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            let countSpan = this.querySelector('.like-count');
            let count = parseInt(countSpan.textContent, 10) || 0;
            if (!this.classList.contains('liked')) {
                count++;
                this.classList.add('liked');
            } else {
                count--;
                this.classList.remove('liked');
            }
            countSpan.textContent = count;
        });
        btn.addEventListener('touchstart', function () {
            let countSpan = this.querySelector('.like-count');
            let count = parseInt(countSpan.textContent, 10) || 0;
            if (!this.classList.contains('liked')) {
                count++;
                this.classList.add('liked');
            } else {
                count--;
                this.classList.remove('liked');
            }
            countSpan.textContent = count;
        });
    });

    // Share links
    document.querySelectorAll('.share-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = window.location.href;
            const title = this.closest('.news-card').querySelector('.news-title').textContent;
            let shareUrl = '';
            switch (this.dataset.platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
                    break;
            }
            window.open(shareUrl, '_blank');
        });
    });

    // Contact form handling with SweetAlert2
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('.submit');
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            setTimeout(() => {
                // Simulate success (set to false for error demo)
                const success = true;

                if (success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message sent successfully!',
                        showConfirmButton: false,
                        timer: 2000,
                        position: 'center',
                        customClass: {
                            popup: 'swal2-animate-scale'
                        }
                    });
                    contactForm.reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong. Please try again.',
                        showConfirmButton: false,
                        timer: 2000,
                        position: 'center',
                        customClass: {
                            popup: 'swal2-animate-scale'
                        }
                    });
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 1500);
        });
    }
});
