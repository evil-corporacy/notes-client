'use client'

import { useGetByIdQuery } from '@/entities/vault/api'
import NavBar from '@/widgets/nav-bar/ui'
import TagsList from '@/widgets/tags-list/ui'
import { CircularProgress, Container, Typography } from '@mui/joy'
import {checkAuth} from "@/features/check-auth";

const Page = ({ params }: { params: { vaultId: string } }) => {
	checkAuth()

	const { data, isLoading } = useGetByIdQuery(params.vaultId)
	const vault = data?.data

	if (isLoading)
		return (
			<main className='h-screen w-screen bg-black'>
				<CircularProgress />
			</main>
		)
	else
		return (
			<main
				style={{ background: vault?.colors[2] }}
				className='h-screen w-screen'
			>
				<NavBar params={params} loading={false} />
				<Container>
					<div className='flex flex-col gap-y-5  pt-10'>
						<Typography level='h1' sx={{ color: vault?.colors[0] }}>
							{vault?.title}
						</Typography>
						<TagsList tags={vault?.tags} colors={vault?.colors} />
						<p style={{ color: vault?.colors[0] }}>{vault?.description}</p>
					</div>
				</Container>
			</main>
		)
}

export default Page
