import { config } from "dotenv";
import 'dotenv/config';
config(); 

import Server from "./configs/server.js";

const server = new Server();
server.listen();