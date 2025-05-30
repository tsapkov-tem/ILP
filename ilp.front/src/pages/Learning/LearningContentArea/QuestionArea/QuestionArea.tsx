import type React from "react";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface QuestionAreaProps {
    file: string;
}

export const QuestionArea : React.FC<QuestionAreaProps> = ({ file }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../../../../assets/${file}.md?raw`)
            .then(res => setContent(res.default))
            .catch(err => console.error('Failed to load markdown:', err));
    }, []);

    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeHighlight]}
            >
                {content}</ReactMarkdown>
        </div>
    );
}