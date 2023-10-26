import React from 'react';
import Heading1 from "@/widgets/heading-1/ui";
import {List, ListItem, ListItemDecorator, Typography} from "@mui/joy";
import Heading2 from '@/widgets/heading-2/ui';
import Heading3 from "@/widgets/heading-3/ui";
import Heading4 from '@/widgets/heading-4/ui';
import Text from "@/widgets/text/ui";
import BasicList from "@/widgets/basic-list/ui";
import NumList from "@/widgets/num-list/ui";
import TodoList from "@/widgets/todo-list/ui";
import Table from '@/widgets/table/ui';
import TableBlock from "@/widgets/table/ui";

const TextBlock = ({block, colors}: {block: any, colors: string[]}) => {

    const parseBlock = () => {
        switch (block.type) {
            case "heading-1":
                return <Heading1 data={block.content} colors={colors}/>
            case "heading-2":
                return <Heading2 data={block.content} colors={colors}/>
            case "heading-3":
                return <Heading3 data={block.content} colors={colors}/>
            case "heading-4":
                return <Heading4 data={block.content} colors={colors}/>
            case "text":
                return <Text data={block.content} colors={colors}>{block.content}</Text>
            case "list":
                return <BasicList list={block.list} colors={colors}/>
            case "num-list":
                return <NumList list={block.list} colors={colors}/>
            case "todo-list":
                return <TodoList list={block.list} colors={colors}/>
            case "table":
                return <TableBlock table={block.table} colors={colors}/>
            default:
                return ""
        }
    }

    return parseBlock()
};

export default TextBlock;