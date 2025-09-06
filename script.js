const selector = document.getElementById('citySelector');
selector.addEventListener('change', function() {
    if (this.value) {
        window.location.href = this.value;
    }
});
