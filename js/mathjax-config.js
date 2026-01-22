window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
        macros: {
            blue: ["\\textcolor{blue}{#1}", 1],
            red: ["\\textcolor{red}{#1}", 1],
            green: ["\\textcolor{green}{#1}", 1]
        }
    },
    options: {
        ignoreHtmlClass: '.*|',
        processHtmlClass: 'arithmatex'
    }
};