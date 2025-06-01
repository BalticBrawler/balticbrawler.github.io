import { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Link as MuiLink,
} from "@mui/material";
import useIsMobile from "./hooks/useIsMobile";

interface SubChapter {
    title: string;
    paragraphs: string[];
}

interface MainChapter {
    title: string;
    subchapters: SubChapter[];
}

const parseMarkdown = (markdown: string): MainChapter[] => {
    const mainChapterRegex = /^# (.+)$/gm;
    const subChapterRegex = /^## (.+)$/gm;

    const mainChapters: MainChapter[] = [];
    let mainChapterMatches;

    while ((mainChapterMatches = mainChapterRegex.exec(markdown)) !== null) {
        const mainChapterTitle = mainChapterMatches[1].trim();
        const mainChapterStart =
            mainChapterMatches.index + mainChapterMatches[0].length;
        const mainChapterEnd =
            mainChapterRegex.exec(markdown)?.index || markdown.length;

        const mainChapterContent = markdown
            .slice(mainChapterStart, mainChapterEnd)
            .trim();

        const subchapters: SubChapter[] = [];
        let subChapterMatches;

        subChapterRegex.lastIndex = 0;

        while (
            (subChapterMatches = subChapterRegex.exec(mainChapterContent)) !==
            null
        ) {
            const subTitle = subChapterMatches[1].trim();
            const subStart =
                subChapterMatches.index + subChapterMatches[0].length;
            const subEnd =
                subChapterRegex.exec(mainChapterContent)?.index ||
                mainChapterContent.length;

            const subContent = mainChapterContent
                .slice(subStart, subEnd)
                .trim();
            const paragraphs = subContent
                .split(/\n\s*\n/)
                .map((p) => p.trim())
                .filter((p) => p.length > 0);

            subchapters.push({ title: subTitle, paragraphs });
            subChapterRegex.lastIndex = subEnd;
        }

        mainChapters.push({ title: mainChapterTitle, subchapters });
        mainChapterRegex.lastIndex = mainChapterEnd;
    }

    return mainChapters;
};

const renderParagraphWithLinks = (paragraph: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(paragraph)) !== null) {
        if (match.index > lastIndex) {
            parts.push(paragraph.slice(lastIndex, match.index));
        }
        const text = match[1];
        const href = match[2];
        parts.push(
            <MuiLink key={href + match.index} href={href}>
                {text}
            </MuiLink>
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < paragraph.length) {
        parts.push(paragraph.slice(lastIndex));
    }

    return parts;
};

function News() {
    const [chapters, setChapters] = useState<MainChapter[]>([]);

    const [, xPadding, topPadding] = useIsMobile();

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch("/content/News.md");
                if (!response.ok) {
                    throw new Error(
                        "Markdown-Datei konnte nicht geladen werden"
                    );
                }
                const text = await response.text();
                const parsed = parseMarkdown(text);
                setChapters(parsed);
            } catch (error) {
                console.error("Fehler beim Laden der Markdown-Datei:", error);
            }
        };

        fetchMarkdown();
    }, []);

    return (
        <Box
            flex={1}
            flexDirection="column"
            justifyItems="stretch"
            alignItems="stretch"
            mt={topPadding}
            mx={xPadding}
            paddingBottom={10}
        >
            {chapters.map((mainChapter, index) => (
                <Box key={index} mb={4}>
                    <Card sx={{ mb: 2 }}>
                        <Typography variant="h4" m={2} gutterBottom>
                            {mainChapter.title}
                        </Typography>
                    </Card>
                    {mainChapter.subchapters.map((sub, subIndex) => (
                        <Card key={subIndex} sx={{ m: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {sub.title}
                                </Typography>
                                {sub.paragraphs.map((para, paraIndex) => (
                                    <Typography
                                        key={paraIndex}
                                        variant="body1"
                                        mt={1}
                                        ml={1}
                                    >
                                        {renderParagraphWithLinks(para)}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default News;
