import NavBar from '@/widgets/nav-bar/ui'
import TagsList from '@/widgets/tags-list/ui'
import { Container, Typography } from '@mui/joy'
import vaults from '../../../shared/data/vaults.json'

const Page = ({ params }: { params: { vaultId: string } }) => {
	const vault = vaults.find(vault => (vault.id = params.vaultId))

	console.log(vault)
	return (
		<main
			style={{ background: vault?.colors[2] }}
			className='h-screen w-screen'
		>
			<NavBar />
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
