// inserir value no input pesquisar e no email (newsletter)
document.querySelector("#pesquisar-produto").value = "busque aqui seu produto";
document.querySelector("#email").value = "Digite seu E-mail";


// inserir o conteudo do menu compre por departamento
const linksMenuDepartamento = ["americanas mercado", "brinquedos e bebês", "celulares e telefonia fixa", "informáticas e tablets", "tv, áudio e home theater", "moda, beleza e perfumaria", "games, livros e filmes", "móveis e decoração", "eletrodomésticos e split", "eletroportáteis", "produtos importados", "para a sua empresa", "cartão, parceiros e serviços", "todos os departamentos"];

const conteudoMenu = document.querySelector(".conteudo-oculto-menu");

linksMenuDepartamento.forEach(e => {
        let a = document.createElement('a');
        a.innerHTML = e;

        if (e === "todos os departamentos") {
                a.classList.add("todos-departamentos");
        }
        a.href="#";

        conteudoMenu.appendChild(a);
});

let contadorCliquesMenuDesk = 0;
let contadorCliquesMenuMobile = 0;
const setaMenu = document.querySelector(".menu-2__login-seta-exibir");
const srcExibir = "images/seta-para-baixo-vermelha.png";
const srcOcultar = "images/seta-para-cima-vermelha.png";
const menuDepartamento = document.querySelector("#menu-departamento");
const menuMobile = document.querySelector(".header__menu-mobile");


exibirMenu(menuDepartamento, conteudoMenu, contadorCliquesMenuDesk, setaMenu, srcExibir, srcOcultar);
exibirMenu(menuMobile, conteudoMenu, contadorCliquesMenuMobile);


function exibirMenu(elementoQueRecebeClique, elementoASerExibido, contadorCliques, seta, SrcsetaExibir, SrcsetaOcultar){
        elementoQueRecebeClique.addEventListener("click", () => {
                if(contadorCliques === 0 || contadorCliques % 2 === 0){
                        exibirElemento(elementoASerExibido);

                        if(seta && SrcsetaExibir && SrcsetaOcultar){
                                alterarSetaExibicao(seta, SrcsetaOcultar);
                        }
                }else{
                        ocultarElemento(elementoASerExibido);
                        if(seta && SrcsetaExibir && SrcsetaOcultar){
                                alterarSetaExibicao(seta, SrcsetaExibir);
                        }
                }

                contadorCliques++;
        });
}

function exibirElemento(elementoASerExibido){
        elementoASerExibido.style.display = "block";
}

function ocultarElemento(elementoASerOcultado){
        elementoASerOcultado.style.display = "none";
}

function alterarSetaExibicao(seta, src){
        seta.src = src;
}