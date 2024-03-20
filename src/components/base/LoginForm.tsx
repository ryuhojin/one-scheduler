/*****************************************************************************************
 * file - LoginForm.tsx
 * description - 로그인 폼 컴포넌트
 * ---------------------------------------------------------------------------------------
 * (수정자(이름) / 날짜 / 내용)
 * 류호진 / 2024.03.18 / 최초작성
 *****************************************************************************************/

import { FC, ReactNode } from "react"

interface LoginFormProps {
    children: ReactNode
}
interface LoginTitleProps {
    children: string
}
interface LoginItemProps {
    type: string
}

const LoginForm: FC<LoginFormProps> = ({ children }) => {
    return <form>
        {children}
    </form>
}

const LoginItiem: FC<LoginItemProps> = ({ type }) => {
    return <div>
        <input type={type} />
    </div>
}

const LoginButton = () => {
    return <button>로그인</button>
}

const LoginTitle: FC<LoginTitleProps> = ({ children }) => {
    return <h2>{children}</h2>
}

export default Object.assign(LoginForm, {
    Title: LoginTitle,
    Item: LoginItiem,
    Submit: LoginButton,
})