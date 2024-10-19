document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    
    if(name === '') {
        alert("Please enter a name!");
        return;
    }
    
    const certificate = document.getElementById('certificate');
    document.getElementById('studentName').textContent = name;
    
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('date').textContent = currentDate;

    certificate.classList.remove('hidden');
});
