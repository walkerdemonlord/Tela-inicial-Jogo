document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    // Defina o volume para 20% (0.2) mais baixo
    audio.volume = 0.2;
    
    // Tente reproduzir a música assim que estiver carregada
    audio.addEventListener('canplaythrough', function() {
        console.log("Tentando reproduzir música...");
        audio.play().then(function() {
            console.log("Música reproduzida com sucesso!");
        }).catch(function(error) {
            console.log("Erro ao reproduzir música:", error);
        });
    });

    // Event listener para detectar a tecla Enter ou Espaço
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            // Redireciona para outra página do jogo
            window.location.href = 'index.html';
        }
    });
});
