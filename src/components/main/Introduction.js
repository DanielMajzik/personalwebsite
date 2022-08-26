import './Introduction.css'

function getIntroduction() {
    return (
    "Hey there! I'm Daniel, a hungarian student passionate about writing, acting, playing the piano " +
    "and last but not least, software and web development. I'm making this React SPA to make myself familiar " +
    "with the framework, and the features it provides for an immersive browsing experience. If you'd like to " +
    "know more about my work, dont hesitate to contact me.\nUntil then, have a wonderful day. (Or " +
    "night if you, too, are a night owl.)"
    );
}

export default function Introduction() {
    return (
        <div id='intro'>
            <h1>Introduction</h1>
            <p>{getIntroduction()}</p>
        </div>
    );
}