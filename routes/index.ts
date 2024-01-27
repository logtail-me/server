export default eventHandler((event) => {
    const { host } = event.node.req.headers;
    const isCustomDomain = host.includes('.');
    
    /**
     * getMainpage(domain, articleId)
     */
    return {
    };
})