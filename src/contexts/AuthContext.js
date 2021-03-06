import React, { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { io } from "../api/io";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";

let accessToken = "";
let user = {};


