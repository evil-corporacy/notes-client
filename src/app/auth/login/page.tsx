'use client'

import { getRandom } from '@/features/get-random'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import KeyIcon from '@mui/icons-material/Key'
import PersonIcon from '@mui/icons-material/Person'
import {Button, FormControl, FormLabel, IconButton, Input, Typography} from '@mui/joy'
import { SubmitHandler, useForm } from 'react-hook-form'
import nicknames from '../../../shared/data/nicknames.json'
import {FormData} from "./model/index"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useState} from "react";

const Page = () => {
	const {
		register,
		handleSubmit,
	} = useForm<FormData>()
	const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
		console.log(data)
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

	return (
		<main className='flex justify-center items-center h-screen w-screen bg-black'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex w-80 flex-col text-center bg-gray p-5 rounded-xl gap-3.5'
			>
				<Typography level='h1' sx={{ color: 'white' }}>
					Логин
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
					<div className="flex">
						<Input
							type={passwordVisible ? 'text' : 'password'}
							startDecorator={<KeyIcon />}
							{...register('password')}
							sx={{ width: '219px' }}
							variant='soft'
							size='lg'
						/>
						<IconButton variant="soft" size="lg" color="neutral" sx={{marginLeft: "15px"}} onClick={() => setPasswordVisible(!passwordVisible)}>
							{passwordVisible ?
								<VisibilityIcon/>
								:
								<VisibilityOffIcon/>
							}
						</IconButton>
					</div>
				</FormControl>

				<Button
					type='submit'
					startDecorator={<ExitToAppIcon />}
					size='lg'
					color="primary"
				>
					Залогиниться
				</Button>
			</form>
		</main>
	)
}

export default Page
