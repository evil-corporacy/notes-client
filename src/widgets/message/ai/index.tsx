import React from 'react';
import {Your} from "@/widgets/message/ai/your-message";
import CompanionMessage from "@/widgets/message/ai/companion-message";

const Message = ({variant, content}: {variant: string, content: any}) => {
    console.log("message: ", content)
    if (variant === "user") return <Your content={content}/>
    if (variant === "assistant") return <CompanionMessage content={content}/>
};

export default Message;