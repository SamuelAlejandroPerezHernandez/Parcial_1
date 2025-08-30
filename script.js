document.getElementById('bC').addEventListener('click', function() {
    const section = document.getElementById('sE');
    
    if (section.style.flexDirection === 'row') {
        section.style.flexDirection = 'column'; 
        section.style.alignItems = 'center';
        this.textContent = 'Cambiar a Columnas';  
    } else {
        section.style.flexDirection = 'row';   
        section.style.alignItems = 'flex-start'; 
        this.textContent = 'Cambiar a Filas';
    }
});

document.getElementById('cT').addEventListener('click', function() {
    const headerTitle = document.querySelector('#hR h1');
    headerTitle.textContent = 'HTML & CSS: Curso práctico avanzado';
});

document.getElementById('cC').addEventListener('click', function() {
    document.getElementById('I1').style.color = 'blue';
    document.getElementById('I2').style.color = 'red';
    document.getElementById('I3').style.color = 'green';

    const paragraphs = document.querySelectorAll('#sE p');
    paragraphs.forEach(p => p.style.color = '#4B0082');
});

document.getElementById('aG').addEventListener('click', function() {
    const footer = document.getElementById('fR');
    
    const image = document.createElement('img');
    image.src = 'IMG/UCA-IMG.jpg'; 
    image.alt = 'Placeholder Image';
    
    image.classList.add('footer-image');
    footer.appendChild(image);
});