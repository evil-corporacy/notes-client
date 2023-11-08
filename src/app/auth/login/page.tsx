'use client'

import {getRandom} from '@/features/get-random'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import KeyIcon from '@mui/icons-material/Key'
import PersonIcon from '@mui/icons-material/Person'
import {
	Button,
	ColorPaletteProp,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Snackbar,
	SnackbarPropsColorOverrides,
	Typography
} from '@mui/joy'
import {SubmitHandler, useForm} from 'react-hook-form'
import nicknames from '../../../shared/data/nicknames.json'
import {FormData} from "./model/index"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {login} from "@/app/auth/login/api";
import {ErrorOutline} from "@mui/icons-material";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {OverridableStringUnion} from "@mui/types";

const Page = () => {
    const {
        register,
        handleSubmit,
    } = useForm<FormData>()
    const [snackBarData, setSnackBarData] = useState<{
        open: boolean,
		status: OverridableStringUnion<ColorPaletteProp, SnackbarPropsColorOverrides> | undefined,
        content: string
    }>({open: false, status: "neutral", content: ""})
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        try {
            setLoading(true)
            const response = await login(data)
            localStorage.setItem("access", response.data.data.tokens.access)
            localStorage.setItem("refresh", response.data.data.tokens.refresh)
            setLoading(false)
            router.replace("/vaults")
        } catch (e: any) {
            setLoading(false)

            if (e.response)
                setSnackBarData({open: true, status: "danger", content: e.response.data.message})
        }
    }

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <>
            <Snackbar
                variant="outlined"
                color={snackBarData.status}
                open={snackBarData.open}
                onClose={() => setSnackBarData({...snackBarData, open: false})}
                startDecorator={<ErrorOutline/>}
                endDecorator={
                    <IconButton
                        onClick={() => setSnackBarData({...snackBarData, open: false})}
                        size="sm"
                        variant="plain"
                        color={snackBarData.status}
                    >
                        <CloseIcon/>
                    </IconButton>
                }
            >
                {snackBarData.content}
            </Snackbar>

            <main className='flex justify-center items-center h-screen w-screen bg-black'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex w-80 flex-col text-center bg-gray p-5 rounded-xl gap-3.5'
                >
                    <Typography level='h1' sx={{color: 'white'}}>
                        Логин
                    </Typography>

                    <FormControl>
                        <FormLabel>
                            <Typography sx={{color: 'white'}}>Никнейм</Typography>
                            <Input
                                {...register('nickname')}
                                placeholder={getRandom(nicknames)}
                                startDecorator={<PersonIcon/>}
                                sx={{width: '280px'}}
                                variant='soft'
                                size='lg'
								disabled={loading}
                                required
                            />
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <div className="flex">
                            <Input
                                type={passwordVisible ? 'text' : 'password'}
                                startDecorator={<KeyIcon/>}
                                {...register('password')}
                                sx={{width: '219px'}}
                                variant='soft'
								disabled={loading}
                                size='lg'
                            />
                            <IconButton variant="soft" size="lg" color="neutral" sx={{marginLeft: "15px"}}
                                        onClick={() => setPasswordVisible(!passwordVisible)}>
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
                        startDecorator={<ExitToAppIcon/>}
                        size='lg'
						loading={loading}
                        color="primary"
                    >
                        Залогиниться
                    </Button>

                    <Typography level="body-lg" sx={{color: "white"}}>Нет аккаунта? <Typography color="primary"><Link
                        href="/auth/registration">Регистрируйся!</Link></Typography></Typography>
                </form>
            </main>
        </>
    )
}

export default Page
