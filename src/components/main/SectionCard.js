import './SectionCard.css'

export default function SectionCard(props) {
    return (
        <div className='section-card'>
            {props.children}
        </div>
    );
}