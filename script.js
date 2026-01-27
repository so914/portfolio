const cards = document.querySelectorAll('.project-card, .skill-box');

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s';
});

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // On efface d'abord toutes les anciennes erreurs
    document.querySelectorAll('.error-msg').forEach(msg => msg.innerText = "");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const projet = document.getElementById('projet').value;
    const message = document.getElementById('message').value;

    if (name === "") {
        document.querySelector('#name + .error-msg').innerText = "Erreur: Nom obligatoire";
        return;
    }

    if (email === "" || !email.includes("@")) {
        document.querySelector('#email + .error-msg').innerText = "Erreur: Email invalide";
        return;
    }

    if (projet === "") {
        document.querySelector('#projet + .error-msg').innerText = "Erreur: Nom du projet obligatoire";
        return;
    }

    if (message.length < 10) {
        document.querySelector('#message + .error-msg').innerText = "Erreur: Message trop court";
        return;
    }

    alert("Formulaire envoyé !");
    this.reset();
});