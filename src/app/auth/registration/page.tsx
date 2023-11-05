'use client'

import EmailIcon from '@mui/icons-material/Email'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import KeyIcon from '@mui/icons-material/Key'
import PersonIcon from '@mui/icons-material/Person'
import {Button, FormControl, FormHelperText, FormLabel, IconButton, Input, Typography} from '@mui/joy'
import { SubmitHandler, useForm } from 'react-hook-form'
import {FormData} from "@/app/auth/registration/model";
import {InfoOutlined} from "@mui/icons-material";
import {containsCyrillic} from "@/features/contains-cyrillic";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from "react";
import {emailValidate} from "@/features/email-validate";
import Link from "next/link";

const Page = () => {
	const {
		register,
		handleSubmit,
		watch,
	} = useForm<FormData>()
	const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
		console.log(data)
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
	const validations: {
		passwordsEqual: boolean, nicknameCyrillic: boolean, mailCyrillic: boolean, passwordCyrillic: boolean, mail: boolean
	} = {
		passwordsEqual: watch()?.password !== watch()?.checkPassword
			&& watch()?.password?.length >= 8
			&& watch()?.checkPassword?.length >= 8,
		nicknameCyrillic: containsCyrillic(watch().nickname) && watch()?.nickname?.length >= 8,
		mailCyrillic: !emailValidate(watch().mail) && watch()?.mail?.length >= 8,
		passwordCyrillic: containsCyrillic(watch().password),
		mail: !emailValidate(watch().mail) && watch()?.mail?.length >= 8,
	}

	return (
		<main className='flex justify-center items-center h-screen w-screen bg-black'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex w-80 flex-col text-center bg-gray p-5 rounded-xl gap-3.5'
			>
				<Typography level='h1' sx={{ color: 'white' }}>
					Регистрация
				</Typography>

				<FormControl error={validations.nicknameCyrillic}>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Никнейм</Typography>
						<Input
							{...register('nickname')}
							placeholder="CoolNickname123"
							startDecorator={<PersonIcon />}
							sx={{ width: '280px' }}
							variant='soft'
							size='lg'
							required
						/>
					</FormLabel>
				</FormControl>
				<FormControl error={validations.mailCyrillic}>
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
						{
							validations.mail ?
								<FormHelperText>
									<InfoOutlined/>
									Это не почта
								</FormHelperText>
								: ""
						}
					</FormLabel>
				</FormControl>
				<FormControl error={validations.passwordCyrillic}>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Пароль</Typography>
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
					</FormLabel>
				</FormControl>
				<FormControl error={validations.passwordsEqual}>
					<FormLabel>
						<Typography sx={{ color: 'white' }}>Еще пароль</Typography>
						<div className="flex">
							<Input
								type={passwordVisible ? 'text' : 'password'}
								startDecorator={<KeyIcon />}
								{...register('checkPassword')}
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
						{
							validations.passwordsEqual
								?
								<FormHelperText>
									<InfoOutlined/>
									Пароли не совпадают!
								</FormHelperText>
								: ""
						}
					</FormLabel>
				</FormControl>

				<Button
					type='submit'
					startDecorator={<ExitToAppIcon />}
					size='lg'
					color="primary"
				>
					Зарегистрироваться
				</Button>

				<Typography level="body-lg" sx={{color: "white"}}>Есть аккаунт? <Typography color="primary"><Link href="/auth/login">Логинься!</Link></Typography></Typography>
			</form>
		</main>
	)
}

export default Page
