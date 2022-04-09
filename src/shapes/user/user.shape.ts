import * as yup from "yup"
import { hashSync } from "bcrypt"

const userShape = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().lowercase().required(),
    password: yup.string().transform(pwd => hashSync(pwd, 10)).required(),
    createdOn: yup.string().default(`${new Date()}`),
    updatedOn: yup.string().default(`${new Date()}`),
    isAdmin: yup.boolean().default(false)
})

export default userShape