import config from "../config";
import { AppError } from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";
import sendResponse from "../utils/sendResponse";

const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req, res, next) => {
    const getToken = req.headers.authorization;
    console.log("getToken:", getToken);
    const token = getToken?.split(" ")[1];

    console.log("Token:", token);

    if (!token) {
      throw new AppError(503, "You are not authorize");
    }

    // lets verify token

    const decode = jwt.verify(
      token,
      config.jwt_access_token as string
    ) as JwtPayload;

    const { role, email, iat } = decode;
    console.log(iat);
    const user = await User.isUserExistWithCustomId(email);

    if (!user) {
      throw new AppError(404, "This user is not found");
    }

    const isDeleted = user?.isDeleted;
    if (isDeleted) {
      throw new AppError(404, "This user is Deleted");
    }

    console.log(user);

    if (
      user.passwordChangedAt &&
      (await User.isJwtIssuedBeforeFunctionPasswordChanged(
        user.passwordChangedAt,
        iat as number
      ))
    ) {
      throw new AppError(403, "Your are not authorized token validate expired");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      return sendResponse(res, {
        success: false,

        statusCode: 401,
        message: "You have no access to this route",
      });
    }

    req.user = decode;

    next();
  });
};

export default auth;
