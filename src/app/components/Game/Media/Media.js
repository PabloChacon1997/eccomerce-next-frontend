import { Container } from "semantic-ui-react";
import { Separator } from "@/app/components/Shared";
import { Video } from "./Video";

export function Media(props) {
  const { video, screenshots } = props;
  return (
    <Container>
      <h2>Visuales</h2>
      <Separator height={30}/>
      <Video video={video }/>
    </Container>
  )
}
