document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.editor');

    textarea.addEventListener('focus', function() {
        textarea.classList.add('editor-focused');
    });

    textarea.addEventListener('blur', function() {
        if (textarea.value.trim() === '') {
            textarea.classList.remove('editor-focused');
        }
    });

    textarea.addEventListener('input', function() {
        if (textarea.value.trim() !== '') {
            textarea.classList.add('editor-focused');
        } else {
            textarea.classList.remove('editor-focused');
        }
    });
});