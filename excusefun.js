function init() {
    console.log('Prachi is here to help you');
    document.querySelector('.error').style.display = "none";
    document.querySelector('body').addEventListener('click',init);
    
    var excl = 'Ummm... A ';
    var adj = ['small ','furious ','fat ','cute','angry'];
    var noun = ['kitty','dog ','lady','baby',"man","theive"];
    var action = ['took my ','stole my ','threw my '];
    var possession = ['laptop ','homework ','cookies ','doll'];
    var place = ['at the park :(','in a garden :(','in front of the everyone :(','from my house:('];
    
    var excl1 = Math.floor(Math.random() * adj.length);
    var adj1 = Math.floor(Math.random() * noun.length);
    var noun1 = Math.floor(Math.random() * action.length);
    var poss = Math.floor(Math.random() * possession.length);
    var pla = Math.floor(Math.random() * place.length);
    
    var finalSentence = excl+ adj[excl1] + " " + noun[adj1] + " " + action[noun1] + possession[poss] + " " + place[pla];
    document.querySelector('#excuse').innerHTML = finalSentence;
};