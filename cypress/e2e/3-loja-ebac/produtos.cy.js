///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitaUrl
    });
    
    it.only('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Stellar Solar Jacket')
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