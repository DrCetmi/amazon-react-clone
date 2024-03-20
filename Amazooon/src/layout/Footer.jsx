import React from "react";
import Img from "../images/amazooon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white text-center z-0 w-full pt-4 px-0">
      <div className="bg-gray-600">
        <button className="p-4">Zurück zum Seitenanfang</button>
      </div>
      <div className="bg-gray-800 flex text-left justify-center">
        <ul className="py-5 px-5">
          <h4 className="font-bold">Über Amazooon</h4>
          <li>
            <Link to="/">karriere bei Amazooon</Link>
          </li>
          <li>
            <Link to="/">Pressenmitteilungen</Link>
          </li>
          <li>
            <Link to="/"> Erfahre mehr über amazooon</Link>
          </li>
          <li>
            <Link to="/"> Impressum</Link>
          </li>
          <li>
            <Link to="/">Amazooon Science</Link>
          </li>
        </ul>
        <ul className="py-5 px-5">
          <h4 className="font-bold">Geld verdienen mit Amazooon</h4>
          <li>
            <Link to="/">Verkaufen bei Amazooon</Link>
          </li>
          <li>
            <Link to="/">Verkaufen bei Amazooon Business</Link>
          </li>
          <li>
            <Link to="/">Partnerprogramm</Link>
          </li>
          <li>
            <Link to="/">Fulfillment by Amazooon</Link>
          </li>
          <li>
            <Link to="/">Bewerben Sie Ihre Produkte</Link>
          </li>
        </ul>

        <ul className="py-5 px-5">
          <h4 className="font-bold">Amazooon Zahlungsarten</h4>
          <li>
            <Link to="">Amazooon.de VISA Karte</Link>
          </li>
          <li>
            <Link to="">Gutscheine</Link>
          </li>
          <li>
            <Link to="">Bankeinzug</Link>
          </li>
          <li>
            <Link to="">Rechnung</Link>
          </li>
          <li>
            <Link to="">Ratenzahlung</Link>
          </li>
        </ul>
        <ul className="py-5 px-5">
          <h4 className="font-bold">Wir helfen Ihnen</h4>
          <li>
            <Link to="">Amazon und COVID-19</Link>
          </li>
          <li>
            <Link to="">Lieferung verfolgen oder Bestellung anzeigen</Link>
          </li>
          <li>
            <Link to="">Versand & Verfügbarkeit</Link>
          </li>
          <li>
            <Link to="">Amazooon Prime</Link>
          </li>
          <li>
            <Link to="">Rückgabe & Ersatz</Link>
          </li>
        </ul>
      </div>
      <div className="bg-gray-800 shadow-lg shadow-gray-100 py-4 px-0 w-full flex items-center justify-center">
        <div className="mx-5">
          <img className="w-12" src={Img} alt="" />
        </div>

        <div> Deutschland &copy; {new Date().getFullYear()}</div>
        {/* <Footersprache /> */}
      </div>{" "}
      <div className="bg-gray-900">
        <div className="flex text-left justify-center">
          <ul className="py-5 px-5">
            <li>
              <Link to="" className="font-bold">
                Amazooon Advertising
              </Link>
            </li>
            <li>
              <Link to="">Kunden finden,</Link>
            </li>
            <li>
              <Link to="">und binden</Link>
            </li>
          </ul>
          <ul className="py-5 px-5">
            <li>
              <Link to="" className="font-bold">
                Amazon Web Services
              </Link>
            </li>
            <li>
              <Link to="">Cloud Computing Dienste</Link>
            </li>
            <li>
              <Link to="">Amazon Outlet</Link>
            </li>
            <li>
              <Link to="">Reduzierte B-Ware</Link>
            </li>
            <li>
              <Link to="">Shopbop</Link>
            </li>
          </ul>
          <ul className="py-5 px-5">
            <li>
              <Link to="" className="font-bold">
                Neueröffnungen
              </Link>
            </li>
            <li>
              <Link to="">und finden</Link>
            </li>
            <li>
              <Link to="">Verkaufen bei Amazooon</Link>
            </li>
            <li>
              <Link to="">Business</Link>
            </li>
            <li>
              <Link to="">Kunden finden</Link>
            </li>
          </ul>
          <ul className="py-5 px-5">
            <li>
              <Link to="" className="font-bold">
                Amazon Second Chance
              </Link>
            </li>
            <li>
              <Link to="">Geben Sie es weiter,</Link>
            </li>
            <li>
              <Link to="">tauschen Sie es ein,</Link>
            </li>
            <li>
              <Link to="">geben Sie ihm ein zweites Leben</Link>
            </li>
          </ul>

          <ul className="py-5 px-5">
            <li>
              <Link to="" className="font-bold">
                Amazon Business Kauf auf Rechnung. PO-Nummern.
              </Link>
            </li>
            <li>
              <Link to="">Für Unternehmen.</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex pt-9 pb-2 gap-6 justify-center font-bold">
            <li>
              <Link to="">Unsere AGB</Link>
            </li>
            <li>
              <Link to="">Datenschutzerklärung</Link>
            </li>
            <li>
              <Link to="">Hinweise zu Cookies</Link>
            </li>
            <li>
              <Link to="">ZVAB</Link>
            </li>
            <li>
              <Link to="">Impressum</Link>

              <Link to="">Amazooon Business</Link>
            </li>
          </ul>
          <ul className="font-bold">
            <li>
              {" "}
              &copy; {new Date().getFullYear()} 2019-2024 Amazooon.com, Inc oder
              Partner-Unternehmen
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
