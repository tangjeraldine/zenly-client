import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import {useEffect, useState} from 'react';
import urlcat from "urlcat";
import axios from "axios";

const SERVER: string = "http://localhost:3000/";

export default async function (req: any, res: any) {
    const [token, setToken] = useState<string>("")
    const {email, password} = req.body;

    const url = urlcat(SERVER, "sign/login");
    axios
      .get(url)
      .then(({ data }) => {
        console.log("token", data.token);
        setToken(data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  
  if (token !== null){
      const Serialised = serialize("LoginSite", token, {
       httpOnly: true,
       secure: process.env.NODE_ENV !== "development",
       sameSite: "strict",
       maxAge: 1200,
       path: "/",
     });
     res.setHeader("Set-Cookie", Serialised);
     res.status(200).json({ message: "Logged in!" });
  } else {
    res.status(401).json({message: "Invalid credentials!"})
  }
}