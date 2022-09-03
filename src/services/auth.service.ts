
import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { encrypt, verified } from '../util/bcrypt.handle';
import { generateToken } from '../util/jwt.handle';

const registerUserService = async (user: User) => {

    const checkIs = await UserModel.findOne({ email: user.email });
    if (checkIs) return "ALREADY_USER";

    user.password = await encrypt(user.password);

    const regiterUser = await UserModel.create(user);

    return regiterUser;
}

const loginUserService = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email: email });
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs
    }

    return { data };
}

export { registerUserService, loginUserService }