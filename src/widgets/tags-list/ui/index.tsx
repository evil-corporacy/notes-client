import { Chip } from '@mui/joy'

const TagsList = ({ tags, colors }: { tags: any; colors?: string[] }) => {
	return (
		<div className='flex gap-2'>
			{tags.map((tag: string, index: number) => (
				<Chip
					key={index}
					variant='solid'
					sx={colors ? { background: colors[1], color: colors[2] } : {}}
				>
					{tag}
				</Chip>
			))}
		</div>
	)
}

export default TagsList
