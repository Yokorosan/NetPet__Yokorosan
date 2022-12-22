import { StyledButtonSeach } from "../../Icons";
import { StyledDiv } from "../../Divs/style";
import { Input } from "../style";
interface iResearch {
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
}

export const Research = ({ setDataValueInput }: iResearch) => (
  <StyledDiv variant="searchBox">
    <Input
      className="inputSeach"
      variant="inputPrimary"
      height="40px"
      width="100vw"
      placeholder="Digite aqui ..."
      onChange={(event) => setDataValueInput(event.target.value)}
    />
    <StyledButtonSeach className="buttonSeach" />
  </StyledDiv>
);
