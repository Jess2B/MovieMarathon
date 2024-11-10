$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})

 // Fetch user details when the page loads
 document.addEventListener('DOMContentLoaded', function () {
    fetchUserDetails();
});

async function fetchUserDetails() {
    try {
        const response = await fetch('/user-details', { credentials: 'include' });
        if (!response.ok) {
            throw new Error('Failed to fetch user details.');
        }
        const data = await response.json();
        if (data.success) {
            // Update the element with user email
            document.getElementById('userEmail').textContent = data.user.email;
        } else {
            console.error('Failed to fetch user details:', data.message);
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

 // Add logout functionality
 document.getElementById('logoutLink').addEventListener('click', function (event) {
    event.preventDefault();
    performLogout();
});

async function performLogout() {
    try {
        const response = await fetch('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            // Redirect to login page
            window.location.href = 'index.html';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
}