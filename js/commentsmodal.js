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
    modalComments.classList.add("rotate-exit");
    setTimeout(() => {
        modalComments.classList.add('none');
        shoesDescriptionContents.classList.remove("none");
        modalComments.classList.remove("rotate-exit");
        modalComments.classList.remove("swing-entrance");
        shoesDescriptionContents.classList.add("swing-entrance");
    }, "700");
};

function openModalComments() {
    shoesDescriptionContents.classList.add("rotate-exit");
    setTimeout(() => {
        modalComments.classList.remove("none");
        shoesDescriptionContents.classList.add('none');
        modalComments.classList.add("swing-entrance");
        shoesDescriptionContents.classList.remove("rotate-exit");
        shoesDescriptionContents.classList.remove("swing-entrance");
    }, "700");
};