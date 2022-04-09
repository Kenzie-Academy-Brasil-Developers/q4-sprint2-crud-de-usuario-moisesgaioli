import dotenv from "dotenv"

dotenv.config()

const config = {
    secret_key: process.env.SECRET_KEY,
    expiresIn: process.env.EXPIRES_IN ?? "24h",
};

export default config
