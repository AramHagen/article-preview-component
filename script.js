const showSocialLinksButton = document.getElementById('showSocialLinksBtn');
const socialLinksContainer = document.querySelector('.share-buttons__content');
showSocialLinksButton.addEventListener('click',(event)=>{
    event.preventDefault();
    event.currentTarget.classList.toggle('active');
    socialLinksContainer.classList.toggle('hide');
})