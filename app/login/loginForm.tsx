"use client"

import { useEffect, useState } from "react";
import Input from "../components/inputs/input";
import Heading from "../components/Headings";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "../components/buttons/buttons";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps{
    currentUser: SafeUser | null
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {

const [isLoading, setIsLoading] = useState(false);

const router = useRouter();

const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues:{
        email: "",
        password: "",
    }
})

//checks to see if user is logged in and pushes them to the cart it true
useEffect(() => {
    if(currentUser) {
        router.push("/cart");
        router.refresh();
    }
}, [])

//handles submit - sets Loading state, and redirects user to cart once log in complete
const onSubmit:SubmitHandler<FieldValues> = (data) => {
setIsLoading(true)
signIn("credentials", {
    ...data,
    redirect: false
}).then((callback) => {
    setIsLoading(false)

    if(callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
    }
    if(callback?.error) {
        toast.error(callback.error);
    }
})
}

//if user is logged in - generates redirecting text
if(currentUser){
    return <p className="text-center">Logged in. Redirecting...</p>
}

    return ( 
        <>
        <Heading title="Sign in to Hillside" />
        <Button 
        buttonText="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {signIn('google')}}
        outline={4}
        custom="font-semibold"
        customIcon="text-googleIcon text-2xl mr-2"
        full
        small
        />
        <hr className="my-4 text-light-primary w-full"></hr>
        <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        />
        <Button
        buttonText={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
        outline={1}
        custom="font-semibold"
        small
        full
        />
        <p className="text-sm">
            Don&apos;t have an account?
            <Link href="/register" className="underline ml-1">
            Register
            </Link>
        </p>
        </>
     );
}
 
export default LoginForm;