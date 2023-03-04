import "./css/headerContainer.css";
// import Button from "../../components/Button/Button";
const Header = () => {
  return (
    <div class="container">
      <div class="header">
        <div class="hallName">RADHAKRISHNAN HALL OF RESIDENCE</div>
        <div class="hallDescription">
          Radhakrishnan Hall of Residence, or the R.K. Hall, is named after the
          renowned scholar and statesman, Dr. Sarvapalli Radhakrishnan, who
          served as the honored President of India from 1962 to 1967.
        </div>
        <div class="headerbutton">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence"
          >
            <button class="headerReadMore">Read More &gt;</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
