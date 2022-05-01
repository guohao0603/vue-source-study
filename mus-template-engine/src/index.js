import parseTemplateToToken from './parseTemplateToToken'

window.MUS_TemplateEngine = {
    render(templateStr, data) {
        let tokens = parseTemplateToToken (templateStr)
        console.log(tokens);
    }
}