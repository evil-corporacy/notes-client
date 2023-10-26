'use client'

import { getRandom } from '@/features/get-random'
import EmailIcon from '@mui/icons-material/Email'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import KeyIcon from '@mui/icons-material/Key'
import PersonIcon from '@mui/icons-material/Person'
import { Button, FormControl, FormLabel, Input, Typography } from '@mui/joy'
import { SubmitHandler, useForm } from 'react-hook-form'
import nicknames from '../../../shared/data/nicknames.json'

const Page = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>()
	const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
		console.log(data)

	return (
		<main className='flex justify-center items-center h-screen w-screen bg-black'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex w-80 flex-col text-center bg-gray p-5 rounded-xl gap-3.5'
			>
				<Typography level='h1' sx={{ color: 'white' }}>
					Регистрация
				</Typography>

				<FormControl>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Никнейм</Typography>
						<Input
							{...register('nickname')}
							placeholder={getRandom(nicknames)}
							startDecorator={<PersonIcon />}
							sx={{ width: '280px' }}
							variant='soft'
							size='lg'
							required
						/>
					</FormLabel>
				</FormControl>
				<FormControl>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Почта</Typography>
						<Input
							{...register('mail')}
							placeholder='mail@mail.com'
							startDecorator={<EmailIcon />}
							sx={{ width: '280px' }}
							variant='soft'
							size='lg'
							required
						/>
					</FormLabel>
				</FormControl>
				<FormControl>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Пароль</Typography>
						<Input
							type='password'
							startDecorator={<KeyIcon />}
							{...register('password')}
							sx={{ width: '280px' }}
							variant='soft'
							size='lg'
						/>
					</FormLabel>
				</FormControl>
				<FormControl>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Еще пароль</Typography>
						<Input
							type='password'
							startDecorator={<KeyIcon />}
							{...register('checkPassword')}
							sx={{ width: '280px' }}
							variant='soft'
							size='lg'
						/>
					</FormLabel>
				</FormControl>

				<Button
					type='submit'
					startDecorator={<ExitToAppIcon />}
					size='lg'
					sx={{ background: 'white', color: 'black' }}
				>
					Зарегистрироваться
				</Button>
			</form>
		</main>
	)
}

export default Page
