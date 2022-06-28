import styled from "@emotion/styled";
import { Box } from "@mui/system";
import LeftSideBar from "../components/LeftSideBar";
import SearchBar from "../components/SearchBar";

const Conttainer = styled(Box)(({ theme }) => ({
    
  
  }));

export default function HomePage(props){
    return(
        <Conttainer display="flex"  justifyContent="row" >
            <LeftSideBar/>
            <SearchBar/>

        </Conttainer>
    )
} 