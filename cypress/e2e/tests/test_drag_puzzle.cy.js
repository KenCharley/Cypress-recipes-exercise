import { PuzzlePage } from "../pages/drag_puzzle.cy.js";


describe('Drag & Drop Puzzle Test', () =>{

    const puzzlePage = new PuzzlePage();

    it('Should complete the puzzle to show logo', () => {
        cy.visit('/puzzle.html');
        cy.get('body').should('contain', 'Complete the puzzle to make the Cypress logo')

        //拖拽操作
        puzzlePage.dragPieceToTarget(puzzlePage.piece1, puzzlePage.targetSlot1);
        puzzlePage.dragPieceToTarget(puzzlePage.piece2, puzzlePage.targetSlot2);
        puzzlePage.dragPieceToTarget(puzzlePage.piece3, puzzlePage.targetSlot3);
        puzzlePage.dragPieceToTarget(puzzlePage.piece4, puzzlePage.targetSlot4);
        puzzlePage.dragPieceToTarget(puzzlePage.piece5, puzzlePage.targetSlot5);
        puzzlePage.dragPieceToTarget(puzzlePage.piece6, puzzlePage.targetSlot6);
        puzzlePage.dragPieceToTarget(puzzlePage.piece7, puzzlePage.targetSlot7);
        puzzlePage.dragPieceToTarget(puzzlePage.piece8, puzzlePage.targetSlot8);
        puzzlePage.dragPieceToTarget(puzzlePage.piece9, puzzlePage.targetSlot9);

        cy.get(puzzlePage.successMessage).should('be.visible');

    })
})