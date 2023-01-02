
import './css/headerContainer.css';
const Header = () => {
    return (
        <div class="header">
            <div class="hallName">
                RADHAKRISHNAN HALL OF RESIDENCE
            </div>
            <div class="hallDescription">
                Radhakrishnan Hall of Residence, or the R.K. Hall, is named after the renowned scholar and statesman, Dr. Sarvapalli Radhakrishnan, who served as the honored President of India from 1962 to 1967.
            </div>
            <div class="headerbutton">
            <a href="/">
                <button class="headerReadMore">
                    <b>Read More &gt;</b>
                </button>
            </a>
            </div>

        </div>
    );
}

export default Header;
