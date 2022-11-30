// designates each movable element
dragElement(document.getElementById("butterfly"));
dragElement(document.getElementById("camel"));
dragElement(document.getElementById('corgi'));
dragElement(document.getElementById('idol'));
dragElement(document.getElementById("orca"));
dragElement(document.getElementById('prawn'));
dragElement(document.getElementById('rattlesnake'));
dragElement(document.getElementById('seagull'));


function dragElement(animalObject) {

    animalObject.onpointermove

	//set 4x vars used for positioning on screen 
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
    // on pointerdown is from web API to help w/ DOM management 
	animalObject.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);

        // x, y coords of animalObj when touched or dragged 
        pos3 = e.clientX;
        pos4 = e.clientY;

        // obj is dragged as cursor moves 
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;

    } function elementDrag(e) {
        // set values 
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // print to console 
        console.log(pos1, pos2, pos3, pos4);

        // -- 
        animalObject.style.top = animalObject.offsetTop - pos2 + 'px';
        animalObject.style.left = animalObject.offsetLeft - pos1 + 'px';
        
    } function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

