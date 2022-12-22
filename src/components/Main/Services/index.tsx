import { useContext } from "react";
import { ServiceContext } from "../../../contexts/ServicesContext";
import { StyledDiv } from "../../Divs/style";

export const ServiceList = () => {
  const { renderList, setServiceClick, openModal } = useContext(ServiceContext);
  return (
    <ul>
      {renderList.map((element, index) => (
        <li key={index} onClick={() => setServiceClick(element)}>
          <StyledDiv variant="serviceCard">
            <img src={element.logo} alt="logo"></img>
            <h2>{element.servicename}</h2>
            <p>{element.typeofservice}</p>
            <p>{element.phone}</p>
            <button onClick={openModal}>Saiba mais</button>
          </StyledDiv>
        </li>
      ))}
    </ul>
  );
};
