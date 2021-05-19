"user srtict";

// Grt root element...
const app = document.getElementById("root");

// Set user profile...
const user = {
  name: `SaintMalik`,
  avatar: `saintmalik.jpeg`,
  twitter: `saintmalik_`,
  bio: `Pentester & Aspiring SoC Analyst`,
};

// Destructure user...
const { name, avatar, twitter, bio } = user;
// Set page title...
document.title = `Home / ${name}`;
// User component...
const html = `
    <section>
      <img src="${avatar}" alt="${name}" />
      <h1 class="name">${name}</h1>
      <p class="bio">${bio}</p>
      <a class="username" href="https://twitter.com/${twitter}" target="_blank">@${twitter}</a>
      <p><small><a class="username" href="https://github.com/saintmalik/pwa-lab-tutorial" target="_blank">Source Code</a></small></p>
    </section>
`;

// Render app...
app.innerHTML = html;


// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install prompt on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('.add-button');
  addBtn.style.display = 'none';
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    showInstallPromotion();
  
    addBtn.addEventListener('click', () => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the PWATest prompt');
        } else {
          console.log('User dismissed the PWATest prompt');
        }
        deferredPrompt = null;
      });
    });
  });