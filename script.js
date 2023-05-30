document.getElementById('input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let input = this.value;
        let output = document.getElementById('output');
        let line = document.createElement('p');

        line.textContent = '127.0.0.1@SmoDev_: ' + input;
        output.appendChild(line);
        this.value = '';

        if(input === 'sudo help') {
            line = document.createElement('p');
            line.textContent = 'Available commands: sudo contacts, sudo projects, sudo about';
            output.appendChild(line);
        }else if(input == 'sudo contacts'){
            line = document.createElement('p');
            line.textContent = 'Puoi contattarmi tramite discord: SmoDev_#8902'
            output.appendChild(line);
        }else if(input == 'sudo projects'){
            line = document.createElement('p');
            line.textContent = 'Ho la stessa esperienza di una patata, non ho progetti (faccio pena lo so)'
            output.appendChild(line);
        }else if(input == 'sudo about'){
            line = document.createElement('p');
            line.textContent = 'Sono owner di tartarugaemmecci e sviluppatore su titanetto, leccami il sottopalla (faccio pena lo so)'
            output.appendChild(line);
        }else{
            line = document.createElement('p');
            line.textContent = 'Command not found: ' + input + '. Type "sudo help" for a list of commands.';
            output.appendChild(line);
        }

        e.preventDefault();
    }
});
