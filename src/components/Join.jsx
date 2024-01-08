import Btc from "../images/hero/crypto-icon.png";
import Eth from "../images/hero/ethereum.png";

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="container">
          <div className="join-content">
            <img alt="coin_img" className="join-content__btc" src={Btc} />
            <img alt="coin_img" className="join-content__eth" src={Eth} />
            <div className="join-content__text">
              <h2>
                CONNECT VIA <br /> <span>discord</span>
              </h2>
              <p>Invest and manage cryptocurrency using CryptoPulse.</p>
              <a rel="noreferrer" target="_blank" href="https://discord.com/">
                Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
