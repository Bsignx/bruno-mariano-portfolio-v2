import { Theme, useTheme } from "~/helpers";
import { styled } from "~/styles";

const ButtonToggleThemeStyled = styled("button", {
  fontWeight: "$bold",
  cursor: "pointer",
  color: "$yellow11",
  borderRadius: "$round",
  backgroundColor: "$buttonNormal",
  "&:hover": { backgroundColor: "$buttonHover" },
  "&:focus": { backgroundColor: "$buttonFocus" },
  fontSize: "$-1",
  pd: "$2",
  "@tablet": { fontSize: "$0", pd: "$3" },
});

export const ButtonToggleTheme = () => {
  const [theme, setTheme] = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <ButtonToggleThemeStyled type="button" onClick={handleChangeTheme}>
      {theme === Theme.DARK ? "🌙" : "🌞"}
    </ButtonToggleThemeStyled>
  );
};
