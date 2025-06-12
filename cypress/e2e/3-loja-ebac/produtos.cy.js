///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitaUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Beaumont Summit Kit')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')


    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('')
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});