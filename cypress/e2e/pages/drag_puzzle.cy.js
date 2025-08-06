export class PuzzlePage {
    constructor() {        

        this.piece3 = ':nth-child(1) > .piece.piece-3'
        this.piece9 = ':nth-child(2) > .piece.piece-9'
        this.piece6 = ':nth-child(3) > .piece.piece-6'
        this.piece1 = ':nth-child(4) > .piece.piece-1'
        this.piece5 = ':nth-child(5) > .piece.piece-5'
        this.piece4 = ':nth-child(6) > .piece.piece-4'
        this.piece8 = ':nth-child(7) > .piece.piece-8'
        this.piece2 = ':nth-child(8) > .piece.piece-2'
        this.piece7 = ':nth-child(9) > .piece.piece-7'

        this.targetSlot1 = '.places > :nth-child(1)'
        this.targetSlot2 = '.places > :nth-child(2)'
        this.targetSlot3 = '.places > :nth-child(3)'
        this.targetSlot4 = '.places > :nth-child(4)'
        this.targetSlot5 = '.places > :nth-child(5)'
        this.targetSlot6 = '.places > :nth-child(6)'
        this.targetSlot7 = '.places > :nth-child(7)'
        this.targetSlot8 = '.places > :nth-child(8)'
        this.targetSlot9 = '.places > :nth-child(9)'

        this.successMessage = '.notice.success';
    }



    dragPieceToTarget(pieceSelector, targetSelector) {
        cy.get(pieceSelector).drag(targetSelector);
    }       
    
}