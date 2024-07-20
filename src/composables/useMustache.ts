import Mustache from 'mustache';


export const useMustache = () => {
    const render = (...[template, view, partials, tagOrOption]: Parameters<typeof Mustache.render>) => {
        return Mustache.render(template, view, partials, tagOrOption);
    }
    return {
        render
    }
}