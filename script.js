var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work');

    workItems.forEach(work => {
        const video = work.querySelector('video');

        work.addEventListener('mouseover', () => {
            video.play();
        });

        work.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0; // Reset video to the beginning
        });
    });
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxG952EHFlOGzBxASXpYP8si24nEj5Mt0-y2Q1j5sdgy9TVrb__5S0c90k7hmQrYFQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Succesfully"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })