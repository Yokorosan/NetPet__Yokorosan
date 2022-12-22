import { useContext } from "react";
import { iDataCategory } from "../../contexts/ServicesContext";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { Research } from "../Inputs/Research";
import { StyledNav } from "./style";

interface iNavBar {
  setSearchBtn: React.Dispatch<React.SetStateAction<string>>;
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
  newNavBar: () => iDataCategory[];
}
export const NavBar = ({
  setSearchBtn,
  newNavBar,
  setDataValueInput,
}: iNavBar) => {
  const { size } = useContext(UserContext);
  return (
    <StyledNav>
      {size > 720 ? <></> : <Research setDataValueInput={setDataValueInput} />}
      <ul className="listFilter">
        <li key={0}>
          <Button variant="ButtonTertiary" onClick={() => setSearchBtn("")}>
            Todos
          </Button>
        </li>
        {newNavBar().map((element, index) => (
          <li key={index + 1}>
            <Button
              variant="ButtonTertiary"
              onClick={() => setSearchBtn(element.typeofservice)}
            >
              {element.typeofservice}
            </Button>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
