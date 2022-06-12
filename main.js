let mixer = mixitup('.albums_container', {
    selectors: {
        target: '.album_card'
    },
    animation: {
        duration: 300
    }
});

/* Active Link Work */
const linkWork = document.querySelectorAll('.album_filter')

function activeAlbum() {
    linkWork.forEach(item => item.classList.remove('active-album'))
    this.classList.add('active-album')
}

linkWork.forEach(item => item.addEventListener('click', activeAlbum))