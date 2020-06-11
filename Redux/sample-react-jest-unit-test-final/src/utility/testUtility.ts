import React from "react";

export const TestHook:React.FC<{callback: () => any}> = ( {callback}) => {
    callback();
    return null;
};