import startMenu from '../assets/start-menu.png';

export default function Footer() {

    return (
        <div className="window fit-to-bottom">
            <div className="title-bar">
                <img src={startMenu} alt="Start Menu" className="start-menu" />
            </div>
        </div>
    )
}