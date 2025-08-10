// Sidebar functionality
const toggleButton = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        sidebar.style.display = sidebar.classList.contains("active") ? "none" : "flex";
    });
}

// Custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    function updateCursor(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }

    document.addEventListener('mousemove', updateCursor);
});


