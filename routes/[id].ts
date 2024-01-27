export default eventHandler((event) => {
    const { host } = event.node.req.headers;
    const isCustomDomain = host.includes('.');
    const articleId = getRouterParam(event, 'id');
    
    /**
     * domainId는 여러 개 있을 수 있는데,
     * 내 커스텀 도메인과 기본 제공 도메인이다.
     * .이 붙어있지 않으면 기본 제공이며,
     * flare.com처럼 .이 붙어있으면 커스텀 도메인이다.
     * 첫 진입 시 도메인과 articleId를 db에서 대조한다.
     * 
     * 기본 테마도 r3에서 가져와서 보여줌.
     */
    /**
     * const template = getSiteTemplate(domain, {
     * });
     * getArticle(domain, articleId)
     */
    return {
        articleId,
    };
})