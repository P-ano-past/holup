import React, { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "first and last name",
        placement: "place in queue",
    }
});

export default UserContext;