let opinion = document.querySelector('#opinion');
let modalComments = document.querySelector('.modal-comments');
let buttonCloseModalComments = document.querySelector('#buttonCloseModalcomments');
let shoesDescriptionContents = document.querySelector('.shoes-description-content');

/* 
 * These 2 functions open or close the comments modal
 */

opinion.addEventListener('click', () => {
    openModalComments();
});

buttonCloseModalComments.addEventListener('click', () => {
    closeModalComments();
});

function closeModalComments() {
    modalComments.classList.add("rotate-out");
    setTimeout(() => {
        modalComments.classList.add('none');
        shoesDescriptionContents.classList.remove("none");
        modalComments.classList.remove("rotate-out");
        modalComments.classList.remove("swing-in-top-fwd");
        shoesDescriptionContents.classList.add("swing-in-top-fwd");
    }, "700");
};

function openModalComments() {
    shoesDescriptionContents.classList.add("rotate-out");
    setTimeout(() => {
        modalComments.classList.remove("none");
        shoesDescriptionContents.classList.add('none');
        modalComments.classList.add("swing-in-top-fwd");
        shoesDescriptionContents.classList.remove("rotate-out");
        shoesDescriptionContents.classList.remove("swing-in-top-fwd");
    }, "700");
};