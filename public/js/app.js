const checkbox = document.querySelector('#checkbox');

if (window.matchMedia('(prefers-color-scheme: dark)')) {
    checkbox.setAttribute('checked', true)
    document.body.classList.toggle('is-dark-mode')
}

checkbox.addEventListener('change', function(event) {
    if(this.checked) {
        // document.body.classList.remove('is-light-mode');
        // document.body.classList.add('is-dark-mode');
    } else {
        // document.body.classList.remove('is-dark-mode');
        // document.body.classList.add('is-light-mode');
    }
})