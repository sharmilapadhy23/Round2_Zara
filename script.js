const building = document.getElementById('building');
const locationIcons = document.querySelectorAll('.location-icon');

building.addEventListener('mouseover', function() {
    document.getElementById('location-icons').style.display = 'block';
});

building.addEventListener('mouseout', function() {
    document.getElementById('location-icons').style.display = 'none';
});

locationIcons.forEach(function(icon) {
    icon.addEventListener('mouseover', function() {
        var position = this.getAttribute('data-position').split(',');
        var x = position[0] + '%';
        var y = position[1] + '%';
        this.style.top = y;
        this.style.left = x;
        this.classList.add('active');
    });

    icon.addEventListener('mouseout', function() {
        this.classList.remove('active');
    });
});