const scores = {
    home: 0,
    guest: 0,
};

// Cache elements often updated
const homeEl = document.getElementById("score-home");
const guestEl = document.getElementById("score-guest");
const controlsHome = document.getElementById("controls-home");
const controlsGuest = document.getElementById("controls-guest");
const resetBtn = document.getElementById("reset");

// Render function, which pushes the state to the screen

function render() {
    homeEl.textContent = String(scores.home);
    guestEl.textContent = String(scores.guest);
}

// Update function : It changes state and then renders

function addPoints(team, inc) {
    // Guard against bad values
    if(!["home", "guest"].includes(team)) return;
    const amount = Number(inc);
    if (!Number.isFinite(amount)) return;

    scores[team] += amount;
    render();
}

// Event delegation for the two control groups
// We listen once on the parent, then check which button was clicked
function handleControlsClick(e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const team = btn.dataset.team; // 'home' or 'guest'
    const inc = btn.dataset.inc; // '1' '2' '3'
    addPoints(team, inc);
}

controlsHome.addEventListener("click", handleControlsClick);
controlsGuest.addEventListener("click", handleControlsClick);

resetBtn.addEventListener("click", () => {
    scores.home = 0;
    scores.guest = 0;
    render();
});

// Initial paint
render();
 