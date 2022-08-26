import './ProductPage.css'
import SectionCard from "../components/main/SectionCard";

export default function ProductPage({title, cover, cards}) {

    return (
        <div id='product-page'>
            <h1 id='title'>{title}</h1>

            <div id='info'>
                <div id='cover'>
                    <SectionCard>
                        <img src={cover} alt={title} id='cover-image'/>
                    </SectionCard>
                </div>

                <div id='description'>
                    {cards.map(section => {
                        return (
                            <SectionCard key={section.title}>
                                <h1>{section.title}</h1>

                                {section.content.map(paragraph => {
                                    return (<p key={paragraph}>{paragraph}</p>);
                                })}

                            </SectionCard>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}