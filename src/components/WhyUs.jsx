import ChooseBox from "./ChooseBox";
import BitHand from "../images/chooseus/Chooseus.png";
import {
  IconCheck,
  IconChecklist,
  IconDeviceMobileMessage,
  IconMoneybag,
  IconPencilBolt,
  IconStack,
  IconTrendingUp,
  IconWallet,
  IconWalletOff,
} from "@tabler/icons-react";
import { IconCash } from "@tabler/icons-react";

function WhyUs() {
  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2>
              why <span>CryptoPulse?</span>
            </h2>
            <div className="choose-container__content">
              <div className="choose-container__content__1">
                <ChooseBox
                  img={<IconWallet />}
                  title="CONNECT YOUR WALLET"
                  text="Connect a trusted wallet to easily deposit and withdraw currency."
                />
                <ChooseBox
                  img={<IconCheck />}
                  title="MAINTAIN CRYPTO"
                  text="Transfer your crypto and keep track of transactions."
                />
                <ChooseBox
                  img={<IconMoneybag />}
                  title="CONFIRM TRANSACTION"
                  text="Easily trade your crypto on CryptoPulse marketplace."
                />
              </div>
              <div className="choose-container__content__2">
                <img src={BitHand} alt="hand_img" />
              </div> 
              <div className="choose-container__content__3">
                <ChooseBox
                  img={<IconDeviceMobileMessage />}
                  title="NFT COMPATIBILITY"
                  text="Ability to tranfer NFT domains."
                />
                <ChooseBox
                  img={<IconCash />}
                  title="WATCH THE MARKET"
                  text="Discover and invest in new crypto while keeping up with how numerous currencies are doing."
                />
                <ChooseBox
                  img={<IconTrendingUp />}
                  title="KEEP UP TO DATE"
                  text="Esily check how the market is doing."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
