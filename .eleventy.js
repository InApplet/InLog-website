module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('site/public')
    // eleventyConfig.addPassthroughCopy("data/projects.json")
    
    return {
        passthroughFileCopy: true,
        dir: {
            input: "site",
            output: "dist"
        }
    }
    
};