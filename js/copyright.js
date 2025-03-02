// Disable right-click
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("You cannot copy or copypaste from Denis website!");
});

// Disable keyboard shortcuts for Inspect Element
document.addEventListener("keydown", (event) => {
    if (
        event.ctrlKey && (event.key === "u" || event.key === "U" ||  // View Source
        event.key === "c" || event.key === "C" ||  // Copy
        event.key === "x" || event.key === "X" ||  // Cut
        event.key === "v" || event.key === "V") || // Paste
        event.key === "F12" ||   // DevTools
        (event.ctrlKey && event.shiftKey && event.key === "I") ||  // DevTools Shortcut
        (event.ctrlKey && event.shiftKey && event.key === "J")  // Console
    ) {
        event.preventDefault();
        alert("You cannot copy from Denis website!");
    }
});

// Disable text selection
document.addEventListener("selectstart", (event) => {
    event.preventDefault();
    alert("You cannot copy from Denis website!");
});

// Disable Dragging
document.addEventListener("dragstart", (event) => {
    event.preventDefault();
});
