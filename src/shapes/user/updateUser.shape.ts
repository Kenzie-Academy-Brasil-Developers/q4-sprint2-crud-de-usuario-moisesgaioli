import * as yup from "yup"
import { hashSync } from "bcrypt"

const updateUserShape = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().lowercase().notRequired(),
    password: yup.string().transform(pwd => hashSync(pwd, 10)).notRequired(),
    updatedOn: yup.string().default(`${new Date()}`).notRequired()
})

export default updateUserShape