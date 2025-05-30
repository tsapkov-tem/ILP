import type React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'; // Для поддержки GitHub Flavored Markdown
import rehypeHighlight from 'rehype-highlight'; // Подсветка синтаксиса
import 'highlight.js/styles/github.css'; // Стили для подсветки
import { useEffect, useState } from "react";

interface TheoryAreaProps {
    file: string;
}

export const TheoryArea : React.FC<TheoryAreaProps> = ({ file }) => {
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