function NFAtoDFA() {        
    var trans = getTransition()
    console.log(trans[0].links[0].symbol)
    console.log(getInitialNode().id);
    console.log(getFinalNodes())
};  

function consumeStringNFA(){    
    var stringToConsume = $('#cadena').val();
    console.log( recursiveConsume(getTransition(),getInitialNode().id,0,stringToConsume.length,stringToConsume,0) )
};

var recursiveConsumeNFA = function(Transitions, NextNode, ActualPosString, LengthString, StringToConsume, LinkPos){
    console.log(ActualPosString + ","+ LengthString)
    if(ActualPosString === LengthString){
        return Transitions[NextNode].node;
    }else{
        if(Transitions[NextNode].links[LinkPos].symbol === StringToConsume.charAt(ActualPosString)){
            return recursiveConsume(Transitions, Transitions[NextNode].links[LinkPos].node.id,ActualPosString+=1,LengthString,StringToConsume,0);
        }else{
            if(LinkPos >= Transitions[NextNode].links.length){
                return recursiveConsume(Transitions, NextNode, LengthString, LengthString, StringToConsume,LinkPos );
            }else{
                return recursiveConsume(Transitions, NextNode, ActualPosString, LengthString, StringToConsume, LinkPos++);
            }
        }
    }
}

function E(node){    
    
};  