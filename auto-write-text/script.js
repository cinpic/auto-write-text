const text = "Niye açıklama yapıyorum ki, sanki anlayacak!" 


let index = 0;

function writeText(){
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.lenght - 1){
        index = 0;
    }
}

setInterval(writeText, 100);