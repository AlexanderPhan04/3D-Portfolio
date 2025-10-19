"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};
export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  // SETUP SOCKET.IO
  useEffect(() => {
    // Only connect if WS_URL is configured
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL;
    if (!wsUrl) {
      console.log("Socket.IO: No WS_URL configured, skipping connection");
      return;
    }

    const username =
      localStorage.getItem("username") || generateRandomCursor().name;
    const socket = io(wsUrl, {
      query: { username },
    });
    setSocket(socket);

    // 🔍 LOG ALL OUTGOING EVENTS
    const originalEmit = socket.emit.bind(socket);
    socket.emit = function (event: string, ...args: any[]) {
      console.log("📤 Socket.IO SEND:", event, args);
      return originalEmit(event, ...args);
    };

    // 🔍 LOG ALL INCOMING EVENTS
    socket.onAny((event, ...args) => {
      console.log("📥 Socket.IO RECEIVE:", event, args);
    });

    socket.on("connect", () => {
      console.log("✅ Socket.IO: Connected to server, ID:", socket.id);
    });
    socket.on("disconnect", (reason) => {
      console.log("❌ Socket.IO: Disconnected, reason:", reason);
    });
    socket.on("msgs-receive-init", (msgs) => {
      setMsgs(msgs);
    });
    socket.on("msg-receive", (msgs) => {
      setMsgs((p) => [...p, msgs]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socket, users, setUsers, msgs }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
