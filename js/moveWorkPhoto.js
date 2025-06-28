document.addEventListener("DOMContentLoaded", () => {
    let workBodyPhoto = document.querySelector('.section__work-body-photo');
    const sectionWork = document.querySelector('.section__work')
    sectionWork.addEventListener("click", () => {
        workBodyPhoto.classList.toggle('section__work-body-photo_transform-right');
    });
})