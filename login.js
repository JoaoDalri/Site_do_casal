
function atualizarAvatar(caminhoDaImagem) {
    const avatarImage = document.getElementById('avatarImage');
    avatarImage.setAttribute('src', caminhoDaImagem);
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;



        if (username === "Joao" && password === "123") {
            const nomeDaPessoa = "João E. Dal Ri";

            const mensagemBoasVindas = document.createElement('p');
            mensagemBoasVindas.textContent = `Bem-vindo, ${nomeDaPessoa}!`;


            // Crie um botão "Continuar"
            const continuarBtn = document.createElement('button');
            continuarBtn.textContent = 'Continuar';

            
            // Adicione um evento de clique ao botão "Continuar"
            continuarBtn.addEventListener('click', function () {
                window.location.href = "index.html";
                console.log('Ação de continuação executada'); // Exemplo de ação
            });

            // Limpe o conteúdo do formulário de login
            loginForm.innerHTML = '';

            // Adicione a mensagem de boas-vindas e o botão ao formulário
            loginForm.appendChild(mensagemBoasVindas);
            loginForm.appendChild(continuarBtn);
            avatarImage.setAttribute('src', 'Fotos-e-video/avatark3-2.jpg');


        } else if (username === "Klaudia" && password === "123") {
            const nomeDaPessoa = "Meu amor";
            
            const mensagemBoasVindas = document.createElement('p');
            mensagemBoasVindas.textContent = `Bem-vinda, ${nomeDaPessoa}!`;
            
            // Crie um botão "Continuar"
            const continuarBtn = document.createElement('button');
            continuarBtn.textContent = 'Continuar';

            // Adicione um evento de clique ao botão "Continuar"
            continuarBtn.addEventListener('click', function () {
                window.location.href = "index.html";
                console.log('Ação de continuação executada'); // Exemplo de ação
            });


            // Limpe o conteúdo do formulário de login
            loginForm.innerHTML = '';

            // Adicione a mensagem de boas-vindas e o botão ao formulário
            loginForm.appendChild(mensagemBoasVindas);
            loginForm.appendChild(continuarBtn);


            
        } else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
        }
    



    });
});