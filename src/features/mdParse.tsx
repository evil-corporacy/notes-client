import {ListItem, Typography} from "@mui/joy";

const makeBold = (text: string) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return text.replace(boldRegex, '<strong>$1</strong>');
}

export const mdParse = (content: string) => {
    const parsedContent = content.split('\n');

    return parsedContent.map((str: string, index: number) => {

        const firstWord = str.split(' ')[0]

        str = makeBold(str)

        switch (firstWord) {
            case "#":
                return <Typography key={index} level="h1">{str.substring(2)}</Typography>;
            case "##":
                return <Typography key={index} level="h2">{str.substring(3)}</Typography>;
            case "###":
                return <Typography key={index} level="h3">{str.substring(4)}</Typography>;
            case "####":
                return <Typography key={index} level="h4">{str.substring(5)}</Typography>;
            case "-":
                return <ListItem key={index}>{str}</ListItem>;
            default:
                return <Typography key={index} component="span">{str}</Typography>;
        }
    })
}