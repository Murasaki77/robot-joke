const chat = document.getElementById('_chat');

const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke(){
    jokeBtn.disable = true;
    const message = createMessage("¿Can you tell me a joke?");
    appendMessage(message);

    const joke = createMessage();
    setElementContent(joke,'<i class="fa-solid-fa-ellipsis"></i>');
    appendMessage(joke);

    const res = await fetch(`https://icanhazdadjoke.com`,{
        headers: {
            Accept: "application/json",

        },
    })
    if(res.ok){
        const data = await res.json();
        console.log(data);//checamos si la API responde bien al enviar el evento click
        setElementContent(joke, data.joke);
        jokeBtn.disable = false;
    }
}

function createMessage(content){
    const element = document.createElement("div");
    element.classList.add('message');
    if(content){
        element.classList.add('response');
        setElementContent(element, content);
    }else{
        element.classList.add('joke');
    }
    return element;

}

function setElementContent(element, content){
    element.innerHTML = content;


}

function appendMessage(element){
    chat.appendChild(element);

}