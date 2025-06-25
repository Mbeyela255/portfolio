const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const profilePic = document.getElementById('profile-pic');

if (profilePic) {
  profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('clicked');
  });
}
