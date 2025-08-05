export class PuzzlePage {
    constructor() {
        /*this.piece3 = '. pieces li:nth-child(3) [class="piece-3"] [data-id="3"]';
        this.piece9 = '. pieces li:nth-child(9) [class="piece-9"][data-id="9"]';
        this.piece6 = '. pieces li:nth-child(6) [class="piece-6"][data-id="6"]';
        this.piece1 = '. pieces li:nth-child(1) [class="piece-1"][data-id="1"]';
        this.piece5 = '. pieces li:nth-child(5) [class="piece-5"][data-id="5"]';
        this.piece4 = '. pieces li:nth-child(4) [class="piece-4"][data-id="4"]';
        this.piece8 = '. pieces li:nth-child(8) [class="piece-8"][data-id="8"]';
        this.piece2 = '. pieces li:nth-child(2) [class="piece-2"][data-id="2"]';
        this.piece7 = '. pieces li:nth-child(7) [class="piece-7"][data-id="7"]';*/
        
        //new
        this.piece3 = ':nth-child(1) > .piece.piece-3'
        this.piece9 = ':nth-child(2) > .piece.piece-9'
        this.piece6 = ':nth-child(3) > .piece.piece-6'
        this.piece1 = ':nth-child(4) > .piece.piece-1'
        this.piece5 = ':nth-child(5) > .piece.piece-5'
        this.piece4 = ':nth-child(6) > .piece.piece-4'
        this.piece8 = ':nth-child(7) > .piece.piece-8'
        this.piece2 = ':nth-child(8) > .piece.piece-2'
        this.piece7 = ':nth-child(9) > .piece.piece-7'


        /*this.targetSlot3 = '. places li:nth-child(3)';
        this.targetSlot9 = '. places li:nth-child(9)';
        this.targetSlot6 = '. places li:nth-child(6)';
        this.targetSlot1 = '. places li:nth-child(1)';
        this.targetSlot5 = '. places li:nth-child(5)';
        this.targetSlot4 = '. places li:nth-child(4)';
        this.targetSlot8 = '. places li:nth-child(8)';
        this.targetSlot2 = '. places li:nth-child(2)';
        this.targetSlot7 = '. places li:nth-child(7)';*/

        //new
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