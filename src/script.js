let windows = document.querySelectorAll(".window");

function openWindow(self) {
    for (let window of windows) {
        if (window.querySelector("h2").innerHTML === self.innerHTML) {
            window.style.visibility = "visible";
            window.style.animation = "pop-up-window 0.5s";
        }
    }
}

function closeWindow(self) {
    self.parentElement.style.visibility = "hidden";
    self.parentElement.style.animation = "";
}

function openNav(self) {
    let nav = self.parentElement.querySelector("nav")
    nav.style.animation = "open-navigation 0.2s";
    nav.style.visibility = "visible";
    self.style.visibility = "hidden";
    document.getElementById("close-button").style.visibility = "visible";
}

function closeNav(self) {
    let nav = self.parentElement.querySelector("nav")
    nav.style.animation = "close-navigation 0.2s";
    nav.style.visibility = "hidden";
    self.style.visibility = "hidden";
    document.getElementById("open-button").style.visibility = "visible";
}