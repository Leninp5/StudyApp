var btn = document.getElementById('newCard');
    btn.addEventListener("click", newCard);

var study_Card = '<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="sie1.jpg" alt="Avatar" style="width:300px;height:200px;"></div><div class="flip-card-back"><p id="cardDefinition"></p></div></div></div> ';

var termArr = [];


    function newCard(){
        var newCard = '<form id="form"> Term<br> <input type="text" name="term" id="term"><br>Definition<br> <textarea name="definition" id="definition" rows="10" cols="30"></textarea><br> <button type="button" action="submitForm()"  id="submit-Form">Submit</button><button id="done_Submiting" action="doneSubmiting()">Done Submiting</button></form>';
            document.getElementById('new-or-study').innerHTML = newCard; 

        var submit_Form = document.getElementById('submit-Form');
            submit_Form.addEventListener('click', submitForm);

        function submitForm(e){
            e.preventDefault();
            var termValue = document.getElementById('term').value;
            var definitionValue = document.getElementById('definition').value;
         
             var cardObj = {
                 term: termValue,
                 definition: definitionValue
             };
            
             termArr.push(cardObj);
                console.log(termArr);
             var reset = document.getElementById('form');
                reset.reset();

        var createdCard = document.getElementById('cardDefinition');
             createdCard.innerText = cardObj.definition;

        }

    }

    function doneSubmiting(e){
        e.preventDefault();
        location.reload();
    }

    var studyBtn = document.getElementById('deckHolder');
        studyBtn.addEventListener('click',studyCard);

    function studyCard(e){
        e.preventDefault();
       
            document.getElementById('deckHolder').innerHTML = study_Card;
    }
   

