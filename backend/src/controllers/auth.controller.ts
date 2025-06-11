import { NextFunction, Request } from "express";

const me = (req: Request, res: Response, next: NextFunction) => {};
const signup = (req: Request, res: Response, next: NextFunction) => {};

const login = (req: Request, res: Response, next: NextFunction) => {};
const logout = (req: Request, res: Response, next: NextFunction) => {};

export default { me, signup, login, logout };
