'use client'

import { useGetByVaultQuery } from '@/entities/note/api'
import Loading from '@/widgets/nav-bar/ui/loading'
import Add from '@mui/icons-material/Add'
import { Button, ListItemButton } from '@mui/joy'
import Link from 'next/link'
import {CreateNoteModal} from "@/widgets/create-note-modal/ui";
import {useState} from "react";

const NavBar = ({
	params,
	loading,
}: {
	params?: { vaultId: string }
	loading?: boolean
}) => {
	const { data, isLoading } = useGetByVaultQuery(params?.vaultId)
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	if (loading || isLoading) return <Loading />
	const notes = data?.content

	const handleOpenModal = () => setModalOpen(true)

	return (
		<div className='relative top-0 border-l-2'>
			<CreateNoteModal open={modalOpen} setOpen={setModalOpen} vaultId={params?.vaultId}/>
			<div className='fixed -top-0 border-l-2 bg-black border-gray/30 right-0 h-full w-72 flex flex-col align-center'>
				<div className='relative align-center flex flex-col gap-3.5 pt-24 py-6 px-3.5 overflow-scroll'>
					<Button size='lg' startDecorator={<Add />} onClick={handleOpenModal}>
						Создать новый ноут
					</Button>
					{/*<Divider>*/}
					{/*    Со звездочками*/}
					{/*</Divider>*/}
					{/*<List>*/}
					{/*    {notes.filter(note => note.starred).map((note: any, index: number) =>*/}
					{/*        <Link href={`/vaults/${params?.vaultId}/notes/${note.id}`} key={index} className="w-full">*/}
					{/*            <ListItemButton variant="plain" sx={{width: "100%", p: 1}}>*/}
					{/*                <div className="flex justify-between w-full">*/}
					{/*                    <div/>*/}
					{/*                    {note.title}*/}
					{/*                    <StarIcon color="primary"/>*/}
					{/*                </div>*/}
					{/*            </ListItemButton>*/}
					{/*        </Link>*/}
					{/*    )}*/}
					{/*</List>*/}
					{/*<Divider>*/}
					{/*    Другие ноуты*/}
					{/*</Divider>*/}
					{notes?.map((note: any, index: number) => (
						<Link
							href={`/vaults/${params?.vaultId}/notes/${note.id}`}
							key={index}
							className='w-full'
						>
							<ListItemButton variant='plain' sx={{ width: '100%' }}>
								<div className='flex justify-center w-full p-2'>
									{note.title}
								</div>
							</ListItemButton>
						</Link>
					))}
					{/*<Divider>*/}
					{/*    Это все*/}
					{/*</Divider>*/}
				</div>
			</div>
		</div>
	)
}

export default NavBar
