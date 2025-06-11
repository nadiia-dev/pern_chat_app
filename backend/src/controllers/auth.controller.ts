import { NextFunction, Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const me = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }

    res.status(200).json({
      id: user?.id,
      fullName: user?.fullName,
      username: user?.username,
      profilePic: user?.profilePic,
    });
  } catch (error: any) {
    console.log("Error in get current user controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signup = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res
        .status(400)
        .json({ error: "Please fill in all required fields" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res
        .status(400)
        .json({ error: `User with username ${username} already exists!` });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
      },
    });

    if (newUser) {
      generateToken(newUser.id, res);
      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error: any) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      res.status(400).json({ error: "Username not found" });
    }

    const comparePassword = await bcryptjs.compare(password, user?.password!);

    if (!comparePassword) {
      res.status(400).json({ error: "Invalid password" });
    }

    generateToken(user?.id!, res);

    res.status(200).json({
      id: user?.id,
      fullName: user?.fullName,
      username: user?.username,
      profilePic: user?.profilePic,
    });
  } catch (error: any) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
