import LoginForm from "@/components/base/LoginForm";

const LoginContainer = () => {
    return <LoginForm>
        <LoginForm.Title>로그인</LoginForm.Title>
        <LoginForm.Item type="text" />
        <LoginForm.Item type="password" />
        <LoginForm.Submit />
    </LoginForm>
}
export default LoginContainer;