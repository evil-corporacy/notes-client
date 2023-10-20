import {Container} from "@mui/joy";
import NavBar from "@/widgets/nav-bar/ui";
import NoteContent from "@/entities/note/ui";

export default function Home() {
  return (
    <main>
        <NavBar/>
      <Container>
        <NoteContent/>
      </Container>
    </main>
  )
}
