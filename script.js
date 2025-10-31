// Fake add article button interaction
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-article-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('You can manually add articles by uploading files to your website folder!');
        });
    }
});
