import { Request, Response } from "express";
import prisma from "../db/prisma";

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: { hasEvery: [receiverId, senderId] },
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          participantIds: {
            set: [senderId, receiverId],
          },
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        senderId,
        body: message,
        conversationId: conversation.id,
      },
    });

    if (newMessage) {
      conversation = await prisma.conversation.update({
        where: {
          id: conversation.id,
        },
        data: {
          messages: {
            connect: {
              id: newMessage.id,
            },
          },
        },
      });
    }

    res.status(201).json(newMessage);
  } catch (error: any) {
    console.error("Error in send message: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    const conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, receiverId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!conversation) {
      return res.status(200).json([]);
    }

    return res.status(200).json(conversation.messages);
  } catch (error: any) {
    console.error("Error in get messages: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getConversations = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  try {
    const userId = req.user.id;

    const conversations = await prisma.user.findMany({
      where: {
        id: {
          not: userId,
        },
      },
      select: {
        id: true,
        fullName: true,
        profilePic: true,
      },
    });

    res.status(200).json(conversations);
  } catch (error: any) {
    console.error("Error in get conversations: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
