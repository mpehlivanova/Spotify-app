import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import * as React from "react";
import { keyGenerator, longText } from "../util";
import MediaCard from "./MediaCard";

const ContainerCards = styled("div")`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px 20px 10px;
`;
const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function ContainerCard(props) {
  const handleGetAlbums = (id) => {
    props.getData(id);
  };
  const handleOpenAlbum = () => {
    props.setOpen();
  };

  return (
    <>
      <Container>
        <Typography variant = "h5" >{props.title}</Typography> 
        <ContainerCards>
          {props.data?.map((el) => {
            
            return (
              <div key={keyGenerator(12)}>
                <MediaCard
                  key={keyGenerator(13)}
                  image={el.images[0]?.url}
                  artists={el.artists && longText(el.artists[0]?.name, 20)}
                  name={longText(el.name, 20)}  
                  onClick={() => {
                    handleGetAlbums(el.id);
                    handleOpenAlbum();
                  }}
                  dataDialog={props.dataDialog}
                  open={props.open}
                  onClose={() => props.onClose()}
                  textButton={props.textButton}
                  type={props.typeAlbum}
                />
              </div>
            );
          })}
        </ContainerCards>
      </Container>
    </>
  );
}
