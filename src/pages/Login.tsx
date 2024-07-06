import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import authApi from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0002',
            password: 'admin123',
        }
    });

    const [login] = authApi.useLoginMutation();


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Login in");
        try {
            const userInfo = {
                id: data.userId,
                password: data.password,
            }
            const res = await login(userInfo).unwrap();

            const user = verifyToken(res.data.accessToken) as TUser;

            dispatch(setUser({ user: user, token: res.data.accessToken }))
            toast.success("Login success", { id: toastId, duration: 2000 });
            navigate(`/${user?.role}/dashboard`);

        } catch (error) {
            toast.error("Something went wrong", { id: toastId, duration: 2000 });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" {...register('userId')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;