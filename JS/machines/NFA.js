function NFAtoDFA() {        
    var trans = getTransition()
    console.log(trans)
    console.log(getInitialNode());
    console.log(getFinalNodes())
};  

function consumeStringNFA(){    
    var stringToConsume = $('#str_cadena').val();
    console.log( recursiveConsume(getTransition(),getInitialNode().idNext,0,stringToConsume.length,stringToConsume) );
    $('#str_cadena').val('');
};

var recursiveConsume = function(Transitions, NextNode, ActualPosString, LengthString, StringToConsume){
    console.log(NextNode)
    console.log(ActualPosString)
    console.log(LengthString)
    if(ActualPosString === LengthString){
        return true
    }
    for(var i = 0; i < Transitions[NextNode].links.length; i++){
        console.log(i)
        if(Transitions[NextNode].links[i].symbol === StringToConsume.charAt(ActualPosString)){
            recursiveConsume(Transitions, Transitions[NextNode].links[i].node.idNext, ActualPosString+1, LengthString, StringToConsume)
        }else if(Transitions[NextNode].links[i].symbol === '#'){
            recursiveConsume(Transitions, Transitions[NextNode].links[i].node.idNext, ActualPosString, LengthString, StringToConsume)
        }
    }
}



function E(node){    
    
};

var recursiveFindE = function(Transitions, NextNode, ArrayE){    
    
};