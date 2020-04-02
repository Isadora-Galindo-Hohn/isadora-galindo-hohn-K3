const result = document.querySelector(".finish");
let visaSvaret = document.getElementById("resultat");
let slutgrid = document.getElementById("slut");
let frågor = document.getElementById("net");
let svar1 = document.getElementById("svar1");
let svar2 = document.getElementById("svar2");
let svarText1 = document.getElementById("svarText1");
let svarText2 = document.getElementById("svarText2");
result.addEventListener("click", check);

let lasangeRubik1 = "Du ska äta en god Klasisk Lasange till middag!";
let ruladRubik1 = "Du ska äta Per Morbergs oxrullader i gräddsås till middag!";
let burgareRubik1 = "Du ska äta Kycklingsliders med lök och bbq-färskost till middag!";
let stroganoffRubik1 = "Du ska äta Korv stroganoff till middag!";
let grytaRubik1 = "Du ska äta en Krämig vegetarisk gryta med quorn och dijonsenap till middag!";
let nudlarRubik1 = "Du ska äta Snabbnudlar med vitlök, chili och parmesan till middag!";
let chilliRubik1 = "Du ska äta Chili sin carne till middag!"; 
let lasangeVegRubik1 = "Du ska äta Veggo lasagne till middag!";

let lasangeRubik2 = "Du kan även äta en god Klasisk Lasange till middag!";
let ruladRubik2 = "Du kan även äta Per Morbergs oxrullader i gräddsås till middag!";
let burgareRubik2 = "Du kan även äta Kycklingsliders med lök och bbq-färskost till middag!";
let stroganoffRubik2 = "Du kan även äta Korv stroganoff till middag!";
let grytaRubik2 = "Du kan även äta en Krämig vegetarisk gryta med quorn och dijonsenap till middag!";
let nudlarRubik2 = "Du kan även äta Snabbnudlar till middag!";
let chilliRubik2 = "Du kan även äta Chili sin carne till middag!"; 
let lasangeVegRubik2 = "Du kan även äta Veggo lasagne till middag!";

let lasangeText = "Klassisk lasagne är väl en rätt man aldrig tröttnar på? Med det här receptet blir din lasagne perfekt med en mjuk och härlig konsistens och dessutom har den en ljuv och exemplarisk smak. Parmesanosten är pricken över i! <a href='https://www.ica.se/recept/klassisk-lasagne-679675/' target='_blank'>Recept finns här!</a>";
let ruladText = "Redig husmanskost, oxrullader i gräddsås, ljuvligt gott! Tips: Koka ner buljongen på högsta värmen så att den reduceras ner ordentligt. Du behöver ta av kastrullen från plattan för att se hur mycket som återstår av buljongen. <a href='https://www.tasteline.com/recept/per-morbergs-oxrullader-i-graddsas/' target='_blank'>Recept finns här!</a>";
let burgareText = "Små burgare gjorda av kycklingfärs smakar toppen med de rätta tillbehören. Löken steks och smaksätts med rökig bbq-sås och krämig färskost som passar perfekt till kycklingfärsen. Kycklingsliders byggs sedan ihop med tomater, avokado och sallad samt naturligtvis slidersbröd. <a href='https://www.ica.se/recept/kycklingsliders-med-lok-och-bbq-farskost-725402/' target='_blank'>Recept finns här!</a>";
let stroganoffText = "Korv Stroganoff på falukorv är en klassiker i det svenska vardagsköket - smakar lika bra i matlådan dagen efter. Här är ett recept från Vår kokbok. Tips! Prova även att göra grytan på frukostkorv eller grillkorv förvariation. <a href='https://www.koket.se/sara_begner/soppor_och_grytor/korv_och_chark/korv_stroganoff/' target='_blank'>Recept finns här!</a>";
let grytaText = "En gryta med mycket smak av det jag gillar bäst - dragon, soltorkade tomater och dijonsenap. /Jessica <a href='https://www.koket.se/kramig-vegetarisk-gryta-med-quorn-och-dijonsenap' target='_blank'>Recept finns här!</a>";
let nudlarText = "Asiatiska snabbnudlar, instant ramen, möter Italien! Aglio, olio e peperoncino betyder vitlök, olja och chili. Addera parmesan och du har en snabblagad, hyfsat billig och rätt så onyttig rätt. Men den är grymt god, även om en italienare skulle vända sig i graven… <a href='https://www.ica.se/recept/snabbnudlar-med-vitlok-chili-och-parmesan-720850/' target='_blank'>Recept finns här!</a>";
let chilliText = "Chili sin carne är till skillnad mot chili con carne en chiligryta utan kött. Här byts kött mot vegofärs och den färdiga grytan serveras med hempicklad jalapeño, ris och gräddfil. <a href='https://www.koket.se/chili-sin-carne-siri-barjes-recept' target='_blank'>Recept finns här!</a>"; 
let lasangeVegText = "En vegetarisk variant på lasagne där du byter ut köttet mot en fyllig tomatsås och varvar med en mumsig crème fraichesås med zucchini. Efter att smakerna får berikas i ugnen blir lasagnen suveränt god. <a href='https://www.ica.se/recept/veggo-lasagne-653499/' target='_blank'>Recept finns här!</a>";

function check(){
    
    let rulad = 0;
    let burgare = 0;
    let stroganoff = 0;
    let gryta = 0;
    let nudlar = 0;
    let chilli = 0; 
    let lasagne = 0;

    const questionSpeed = document.querySelector("input[name='q1']:checked");
    let speed = questionSpeed.value;
    
    if (speed == "1")
    {
        rulad++;
        lasagne++;
    }else if (speed == "2")
    {
        burgare++;
        gryta++;
    }else if (speed == "3")
    {
        stroganoff++;
        chilli++;
    }else
    {
        nudlar++;
    }

    const questionVeg = document.querySelector("input[name='q2']:checked");
    let veg = questionVeg.value;

    const questionInvite = document.querySelector("input[name='q3']:checked");
    let invite = questionInvite.value;

    if (invite == "1")
    {
        rulad++;
        lasagne++;
        gryta++;
    }else if (invite == "2")
    {
        burgare++;
    }else if (invite == "3")
    {
        lasagne++;
        stroganoff++;
        gryta++;
        chilli++;
    }else
    {
        nudlar++;
    }

    const questionDishes = document.querySelector("input[name='q4']:checked");
    let dishes = questionDishes.value;

    if (dishes == "1")
    {
        rulad++;
    }else if (dishes == "2")
    {
        lasagne++;
        stroganoff++;
        burgare++;
    }else if (dishes == "3")
    {
        gryta++;
        chilli++;
        nudlar++;
    }

    const questionMoney = document.querySelector("input[name='q5']:checked");
    let money = questionMoney.value;

    if (money == "1")
    {
        rulad++;
    }else if (money == "2")
    {
        lasagne++;
        burgare++;
    }else if (money == "3")
    {
        stroganoff++;
        gryta++;
        chilli++;
    }else
    {
        nudlar++;
    }

    let highest = 0;

    if (dishes == 4){

        svar1.innerHTML = "Du borde beställa hem mat";
        svarText1.innerHTML = "För dig som inte vill ha NÅGON disk alls så är det bästa valet att köpa hem mat. Du kan välja bland ett masssivt utbjud mat. MUMS!";

    }else if (veg == 1){

        highest = Math.max(lasagne, nudlar, gryta, chilli);

        if (lasagne == highest)
        {          
            if (nudlar == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText;
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (gryta == lasagne){
                svar1.innerHTML =lasangeRubik1;
                svarText1.innerHTML = lasangeText;
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (chilli == lasagne){
                svar1.innerHTML =lasangeRubik1;
                svarText1.innerHTML = lasangeText;
                svar2.innerHTML = chilliRubik2
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText;  
            }

        }else if (gryta == highest)
        {
            if (lasagne == gryta){
                svar1.innerHTML = grytaRubik1; 
                svarText1.innerHTML = grytaText;
                svar2.innerHTML = lasangeVegRubik2;
                svarText2.innerHTML = lasangeVegText;
            }else if (nudlar == gryta){
                svar1.innerHTML = grytaRubik1; 
                svarText1.innerHTML = grytaText;
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (chilli == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = grytaRubik1 ;
                svarText1.innerHTML = grytaText;
            }
        }
        else if (nudlar == highest)
        {          
            if (lasagne == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
                svar2.innerHTML = lasangeVegText;
                svarText2.innerHTML = lasangeVegRubik2;
            }else if (gryta == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
                svar2.innerHTML = grytaRubik1;
                svarText2.innerHTML = grytaText;
            }else if (chilli == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;  
            }
        }
        else if (chilli == highest)
        {           
            if (lasagne == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = lasangeVegRubik2;
                svarText2.innerHTML = lasangeVegText;
            }else if (nudlar == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (gryta == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else{
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText; 
            }
        }
    }else if (veg == 2){

        highest = Math.max(lasagne, burgare, nudlar, rulad, gryta, stroganoff, chilli);

        if (lasagne == highest)
        {        
            if (burgare == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText; 
                svar2.innerHTML = burgareRubik2;
                svarText2.innerHTML = burgareText;
            }else if (nudlar == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText; 
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;                
            }else if (rulad == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText; 
                svar2.innerHTML = ruladRubik2;
                svarText2.innerHTML = ruladText;
            }else if (gryta == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText; 
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (stroganoff == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText; 
                svar2.innerHTML = stroganoffRubik2;
                svarText2.innerHTML = stroganoffText;
            }else if (chilli == lasagne){
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText; 
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = lasangeRubik1;
                svarText1.innerHTML = lasangeText;
            }
        }else if (burgare == highest)
        {
            if (lasagne == burgare){
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
                svar2.innerHTML = lasangeRubik2;
                svarText2.innerHTML = lasangeText;
            }else if (nudlar == burgare){
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (rulad == burgare){
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
                svar2.innerHTML = ruladRubik2;
                svarText2.innerHTML = ruladText;
            }else if (gryta == burgare){
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (stroganoff == burgare){
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
                svar2.innerHTML = stroganoffRubik2;
                svarText2.innerHTML = stroganoffText;
            }else if (chilli == burgare){
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = burgareRubik2;
                svarText1.innerHTML = burgareText;
            }
        }else if (nudlar == highest)
        {
            if (lasagne == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
                svar2.innerHTML = lasangeRubik2; 
                svarText2.innerHTML = lasangeText;
            }else if (burgare == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText; 
                svar2.innerHTML = burgareRubik2;
                svarText2.innerHTML = burgareText;
            }else if (rulad == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText; 
                svar2.innerHTML = ruladRubik2;
                svarText2.innerHTML = ruladText;
            }else if (gryta == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (stroganoff == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText; 
                svar2.innerHTML = stroganoffRubik2;
                svarText2.innerHTML = stroganoffText;
            }else if (chilli == nudlar){
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = nudlarRubik1; 
                svarText1.innerHTML = nudlarText;
            }
        }else if (rulad == highest)
        {
            if (lasagne == rulad){
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
                svar2.innerHTML = lasangeRubik2; 
                svarText2.innerHTML = lasangeText;
            }else if (nudlar == rulad){
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (burgare == rulad){
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
                svar2.innerHTML = burgareRubik2;
                svarText2.innerHTML = burgareText;
            }else if (gryta == rulad){
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (stroganoff == rulad){
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
                svar2.innerHTML = stroganoffRubik2;
                svarText2.innerHTML = stroganoffText;
            }else if (chilli == rulad){
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = ruladRubik1;
                svarText1.innerHTML = ruladText;
            }
        }else if (gryta == highest)
        {
            if (lasagne == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;  
                svar2.innerHTML = lasangeRubik2; 
                svarText2.innerHTML = lasangeText;
            }else if (nudlar == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;  
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (rulad == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;  
                svar2.innerHTML = ruladRubik2;
                svarText2.innerHTML = ruladText;
            }else if (burgare == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;  
                svar2.innerHTML = burgareRubik2;
                svarText2.innerHTML = burgareText;
            }else if (stroganoff == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;  
                svar2.innerHTML = stroganoffRubik2;
                svarText2.innerHTML = stroganoffText;
            }else if (chilli == gryta){
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;  
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = grytaRubik1;
                svarText1.innerHTML = grytaText;
            }
        }else if (stroganoff == highest)
        {
            if (lasagne == stroganoff){
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;  
                svar2.innerHTML = lasangeRubik2; 
                svarText2.innerHTML = lasangeText;
            }else if (nudlar == stroganoff){
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;  
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (rulad == stroganoff){
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;  
                svar2.innerHTML = ruladRubik2;
                svarText2.innerHTML = ruladText;
            }else if (gryta == stroganoff){
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;  
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (burgare == stroganoff){
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;  
                svar2.innerHTML = burgareRubik2;
                svarText2.innerHTML = burgareText;
            }else if (chilli == stroganoff){
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;  
                svar2.innerHTML = chilliRubik2;
                svarText2.innerHTML = chilliText;
            }else{
                svar1.innerHTML = stroganoffRubik1;
                svarText1.innerHTML = stroganoffText;
            }
        }else if (chilli == highest)
        {
            if (lasagne == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar1.innerHTML = lasangeRubik1; 
                svarText1.innerHTML = lasangeText;
            }else if (nudlar == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = nudlarRubik2;
                svarText2.innerHTML = nudlarText;
            }else if (rulad == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;             
                svar2.innerHTML = ruladRubik2;
                svarText2.innerHTML = ruladText;
            }else if (gryta == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = grytaRubik2;
                svarText2.innerHTML = grytaText;
            }else if (stroganoff == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = stroganoffRubik2;
                svarText2.innerHTML = stroganoffText;
            }else if (burgare == chilli){
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
                svar2.innerHTML = burgareRubik2;
                svarText2.innerHTML = burgareText;
            }else{
                svar1.innerHTML = chilliRubik1;
                svarText1.innerHTML = chilliText;
            }
        }
    }
visaSvaret.style.display="block";
frågor.style.display="none";
slutgrid.style.gridTemplateRows="7rem auto";
result.innerHTML="Ladda om sidan för att köra om quiz";
}