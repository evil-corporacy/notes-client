import {Button, Container} from "@mui/joy";
import Link from "next/link";
import {Edit} from "@mui/icons-material";

export default function Home() {
  return (
    <main className="bg-black h-full min-h-screen">
        <Container>
            <div className="flex flex-col justify-center items-center gap-2.5 h-screen">
                <Edit sx={{fontSize: 200, position: "absolute", marginTop: -15, zIndex: 0}}/>
                <h1 className="text-white font-bold text-9xl z-10">Notes</h1>
                <h2 className="text-white font-bold text-xl z-10">Храни информацию</h2>
                <h2 className="text-white font-bold text-xl z-10">Делись информацией</h2>
                <Link href={"/auth/login"}>
                    <Button variant="outlined" color="primary">Начать</Button>
                </Link>
            </div>
        </Container>
    </main>
  )
}
