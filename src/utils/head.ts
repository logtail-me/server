
interface Base {
    /** 사이트 이름 */
    name: string;
    /**
     * 사용자가 설정했거나 기본적으로 주어진 도메인
     */
    domain: string;
    categoryName: string;
    author: string;
    /** 페이지 제목 */
    title: string;
    /** 200-300자 설명 */
    description: string;
    thumbnailUrl: string;
    tags: string[],
    createdAt: string;
    updatedAt?: string;
}
const og = ({ name, domain, categoryName, author, title, description, thumbnailUrl, tags, createdAt, updatedAt }: Base) => `
<meta name="description" content="${ description }">
<meta name="keywords" content="${tags.join(',')}">
<meta name="author" content="${ author }">
<meta property="og:type" content="website">
<meta property="og:url" content="${ domain }">
<meta property="og:title" content="${ title }">
<meta property="og:description" content="${ description }">
<meta property="og:image" content="${ thumbnailUrl }">
<meta property="og:site_name" content="${ name }">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@사이트트위터핸들">
<meta name="twitter:creator" content="@작성자트위터핸들">
<meta name="twitter:title" content="${ title }">
<meta name="twitter:description" content="${ description }">
<meta name="twitter:image" content="${ thumbnailUrl }">
<meta name="date" content="${ updatedAt || createdAt }">
<meta property="article:published_time" content="${createdAt}">
${updatedAt ? `<meta property="article:modified_time" content="${updatedAt}">` : ''}
<meta property="article:author" content="${ author }">
<meta property="article:section" content="${ categoryName }">
<meta property="article:tag" content="${ tags }">`;
const rss = () => `<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml">`;

interface Me { profileLinks?: string[] }
const me = ({ profileLinks }: { profileLinks?: string[] }): string => (profileLinks || []).map((link) => `<link rel="me" href="${link}">`).join()

interface Etc {
    themeColor: string;
}
const etc = ({ themeColor }: Etc) => `
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="theme-color" content="${ themeColor }">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
`
// 뉴스 관련태그일 경우
// <meta name="news_keywords" content="키워드1, 키워드2, 키워드3">
// <link rel="amphtml" href="https://www.example.com/url/to/amp/document.html">

const cache = () => `
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
`

type Head = Base & Me & {
    themeColor: string;
};
const head = (props: Head) => `
<meta charset="UTF-8">
<meta http-equiv="content-language" content="ko-KR">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<meta name="thumbnail" content="https://example.com/thumbnail.jpg">
<meta name="copyright" content="© 2024 logtail">
${og(props)}
${me(props)}
${cache()}
${etc(props)}
`