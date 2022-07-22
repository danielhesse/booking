import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="list">
          <div className="listItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hospedagens</span>
          </div>
          <div className="listItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </div>
          <div className="listItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de carros</span>
          </div>
          <div className="listItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
          </div>
          <div className="listItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Táxis (aeroporto)</span>
          </div>
        </div>

        <h1 className="title">Encontre sua próxima estadia</h1>
        <p className="description">
          Encontre ofertas em hotéis, casas, apartamentos e muito mais...
        </p>
        <button className="button">Login / Cadastre-se</button>
      </div>
    </div>
  );
}
