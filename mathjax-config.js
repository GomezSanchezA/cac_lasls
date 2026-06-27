/* ====================================================================
   SECTION: MathJax configuration
   ==================================================================== */
window.MathJax = {
    loader: { load: ['[tex]/html', '[tex]/boldsymbol'] },
    startup: { typeset: false },
    tex: {
        packages: { '[+]': ['html', 'boldsymbol'] },
        displayMath: [['\\[', '\\]']],
        inlineMath: [['\\(', '\\)']]
    },
    chtml: {
        matchFontHeight: false
    }
};
