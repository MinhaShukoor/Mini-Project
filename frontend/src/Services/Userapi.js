import { UserInstance } from "../../Axios/AxiosInstance"

export const signup =(value) =>{
    return UserInstance.post('/signup',{...value})
}

