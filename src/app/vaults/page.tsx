// import { Vault } from '@/entities/vault/model'
import VaultCard from '@/entities/vault/ui'
import { Container, Typography } from '@mui/joy'
import vaults from '../../shared/data/vaults.json'

const Page = () => {
	return (
		<main className='h-full w-full bg-black'>
			<Container>
				<div className='my-10'>
					<Typography level='h1' sx={{ color: 'white' }}>
						Твои волты
					</Typography>
					<div className='w-full flex flex-wrap gap-y-20 justify-between'>
						{vaults.map((vault, index: number) => (
							<VaultCard key={index} vault={vault} />
						))}
					</div>
				</div>
			</Container>
		</main>
	)
}

export default Page
