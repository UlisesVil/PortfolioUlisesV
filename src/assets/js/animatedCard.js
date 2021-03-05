$(document).ready(function() {


    class AnimatedCard{   
        
        constructor(config){
            this.cards=document.querySelectorAll('.' + config.cards);
            console.log(this.cards);
            this.config = config;
            this.addListeners();
            
        }    
        
        addListeners(){
            this.cards.forEach((card)=>{
                card.addEventListener('mouseenter',(e)=>{
                    console.log('entro');
                    this.runAnimation(e.target, e);
                    this.zoomInAnimation(e.target);
                });
                card.addEventListener('mouseleave',(e)=>{
                    console.log('salio');
                    this.runAnimation(e.target, e);
                    this.zoomOutAnimation(e.target);
                });
            });
        }

        zoomInAnimation(element){
            element.querySelector(this.config.imgzoom).style.transition="all 1s";
            element.querySelector(this.config.imgzoom).style.transform="scale(1.5)";
        }
        
        zoomOutAnimation(element){
            element.querySelector(this.config.imgzoom).style.transition="all 1s";
            element.querySelector(this.config.imgzoom).style.transform="scale(1)";
        }

        runAnimation(element, event){
            console.log(element);
           let isCard = element.classList.contains(this.config.cards);
           console.log(isCard);
           if(isCard){
                let cardLayer = element.querySelector(this.config.layer);
                //let imgzoom = element.querySelector(this.config.imgzoom);
                //console.log(imgzoom);
                let side = this.findSide(element, event.x, event.y);
                console.log(side);
                let className='';

                switch(side){
                    case 'top': 
                        className = this.getPrefix() + this.config.suffixes.top;
                        break;
                    case 'bottom': 
                        className = this.getPrefix() + this.config.suffixes.bottom;
                    break;
                    case 'left': 
                        className = this.getPrefix() + this.config.suffixes.left;
                    break;
                    case 'right': 
                        className = this.getPrefix() + this.config.suffixes.right;
                    break;
                };

                this.config.animations.forEach((className)=>{
                    cardLayer.classList.remove(className);
                });
                //imgzoom.classList.add(this.config.animationzoom);
               

                cardLayer.classList.add(className);
           }
        }

        getPrefix(){
            return event.type === 'mouseenter'?'enter':'leave';
        }


        findSide(card, cursorX, cursorY){
            //console.log(card, cursorX, cursorY);
            let cardBounding = card.getBoundingClientRect();
            //console.log(cardBounding);

            let leftEdge = cardBounding.left;
            let topEdge = cardBounding.top;
            let rightEdge = cardBounding.right;
            let bottomEdge = cardBounding.bottom;

            let diffTopY = Math.abs(topEdge - cursorY);
            let diffbottomY = Math.abs(bottomEdge - cursorY);
            let diffLeftX = Math.abs(leftEdge - cursorX);
            let diffRightX = Math.abs(rightEdge - cursorX);
            //console.log(diffTopY);
            //console.log(diffbottomY);
            //console.log(diffLeftX);
            //console.log(diffRightX);

            let min = Math.min(diffTopY, diffbottomY, diffLeftX, diffRightX);
            //console.log(min);

            switch(min){
                case diffTopY:
                    return 'top';
                case diffbottomY:
                    return 'bottom';
                case diffLeftX:
                    return 'left';
                case diffRightX:
                    return 'right';
            }
        }
    }

    new AnimatedCard({
        cards: 'card',
        layer: '.card_layer',
        imgzoom: '.imgzoom',
        animationzoom: 'zoomIn',
        animations: ['enter-top', 'enter-bottom', 'enter-left', 'enter-right', 'leave-top', 'leave-bottom', 'leave-left', 'leave-right'],
        suffixes: {
            top: '-top',
            bottom: '-bottom',
            left: '-left',
            right: '-right'
        }
    });

});  