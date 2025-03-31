import { Countdown } from "../components/countdown/Countdown";
import { SuperMarket, SuperMarketProps } from "../components/supermarket/supermarket";

export default function Index() {

  const market: SuperMarketProps = {
    name: 'Rewe',
    openingHour: {
      from: 8,
      to: 22
    },
    locations: [
      {
        provider: 'What3Words',
        link: 'https://what3words.com/bevorzugt.genauere.bliebe'
      }
    ]
  }

  const superMarkets = SuperMarket(market);

  return (
    <div className="w-full flex justify-content-center">
      <div className="w-full" style={{ maxWidth: "1024px" }}>
        <div className="w-full flex flex-row flex-wrap justify-content-center mb-2">
          <img src='/logo.jpeg' style={{ maxWidth: "400px" }}></img>
          <div className="flex flex-column justify-content-center">
            <h1>//Farmfest_2025_H1</h1>
            <p>
              <span className="pi pi-calendar mr-2"></span>24.05.2025<br />
              <span className="pi pi-clock mr-2"></span>15:00 - 04:00<br />
              <span className="pi pi-map-marker mr-2"></span>Luhdorfer Twieten 10, 21423 Winsen (Luhe)
            </p>
            <div>Farmfest beginnt in: <b><Countdown until={new Date(2025, 4, 24, 15, 0)}></Countdown></b></div>
          </div>
        </div>
      </div>

    </div>
  );
}
