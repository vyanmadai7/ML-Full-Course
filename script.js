// Paste this in your <script> tag or .js file

document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.style.overflowY = "auto";
        sidebar.style.height = "100vh";

        // Smooth custom scrollbar
        const style = document.createElement("style");
        style.textContent = `
      #sidebar::-webkit-scrollbar { width: 4px; }
      #sidebar::-webkit-scrollbar-track { background: transparent; }
      #sidebar::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
      #sidebar::-webkit-scrollbar-thumb:hover { background: #888; }
    `;
        document.head.appendChild(style);
    }

});