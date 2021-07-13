$(document).ready(function() {

  class AnimatedCard{

    constructor(config){
      this.cards=document.querySelectorAll('.' + config.cards);
      this.config = config;
      this.addListeners();
    }

    addListeners(){
      this.cards.forEach((card)=>{
        card.addEventListener('mouseenter',(e)=>{
            this.runAnimation(e.target, e);
            this.zoomInAnimation(e.target);
        });
        card.addEventListener('mouseleave',(e)=>{
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
      let isCard = element.classList.contains(this.config.cards);
      if(isCard){
        let cardLayer = element.querySelector(this.config.layer);
        let side = this.findSide(element, event.x, event.y);
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

        cardLayer.classList.add(className);
      }
    }

    findSide(card, cursorX, cursorY){
      let cardBounding = card.getBoundingClientRect();
      let leftEdge = cardBounding.left;
      let topEdge = cardBounding.top;
      let rightEdge = cardBounding.right;
      let bottomEdge = cardBounding.bottom;

      let diffTopY = Math.abs(topEdge - cursorY);
      let diffbottomY = Math.abs(bottomEdge - cursorY);
      let diffLeftX = Math.abs(leftEdge - cursorX);
      let diffRightX = Math.abs(rightEdge - cursorX);

      let min = Math.min(diffTopY, diffbottomY, diffLeftX, diffRightX);

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

    getPrefix(){
      return event.type === 'mouseenter'?'enter':'leave';
    }
  }

  new AnimatedCard({
    cards: 'card',
    layer: '.card_layer',
    imgzoom: '.imgzoom',
    animationzoom: 'zoomIn',
    animations: [
      'enter-top',
      'enter-bottom',
      'enter-left',
      'enter-right',
      'leave-top',
      'leave-bottom',
      'leave-left',
      'leave-right'
    ],
    suffixes: {
      top: '-top',
      bottom: '-bottom',
      left: '-left',
      right: '-right'
    }
  });
});
