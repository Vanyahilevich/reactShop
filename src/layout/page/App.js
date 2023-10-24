import {Box} from "@mui/material";
import FirstPaint from "../paint/FirstPaint";
import PartnersPaint from "../paint/PartnersPaint";
import AboutUsPaint from "../paint/AboutUsPaint";
import VacancyPaint from "../paint/VacancyPaint";
import TalentsPaint from "../paint/TalentsPaint";


function App() {


  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {xs: "20px", sm: "50px", md: "80px"}
      }}
    >
      <FirstPaint/>
      <PartnersPaint/>
      <AboutUsPaint/>
      <VacancyPaint/>
      <TalentsPaint/>
    </Box>

  );
}

export default App;
