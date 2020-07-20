// inserir value no input pesquisar e no email (newsletter)
document.querySelector("#pesquisar-produto").value = "busque aqui seu produto";
document.querySelector("#email").value = "Digite seu E-mail";


// criar  o menu por departamento
const linksMenuDepartamento = ["americanas mercado", "brinquedos e bebês", "celulares e telefonia fixa", "informáticas e tablets", "tv, áudio e home theater", "moda, beleza e perfumaria", "games, livros e filmes", "móveis e decoração", "eletrodomésticos e split", "eletroportáteis", "produtos importados", "para a sua empresa", "cartão, parceiros e serviços", "todos os departamentos"];

const conteudoMenu = document.createElement('div');
conteudoMenu.classList.add("conteudo-oculto-menu");

linksMenuDepartamento.map(e => {
        let a = document.createElement('a');
        a.innerHTML = e;

        if (e === "todos os departamentos") {
                a.classList.add("todos-departamentos");
        }
        conteudoMenu.appendChild(a);
});

document.querySelector(".menu02").appendChild(conteudoMenu);
console.log(conteudoMenu);

const menuDepartamento = document.querySelector("#menu-departamento");
menuDepartamento.addEventListener('onmouserover', () => {
        alert("ok");
        conteudoMenu.style.display = "block";
});