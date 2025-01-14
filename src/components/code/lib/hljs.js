/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: hljs渲染代码
 */
await $.__tools.dynamicLoadingJs($.__config.default.highlight).catch(e => console.error('hightlight.js', e))
export default function main(setCodeLine) {

    let theme = $.__config.code.options.hljs.theme.toLowerCase()
    $.__tools.dynamicLoadingCss(`${$.__config.default.hljscss + theme}.min.css`)
    let code  = $('code-box pre code')
    let bgFlg = $.inArray(theme, [
        'github-gist', 'googlecode', 'grayscale',
        'idea', 'isbl-editor-light', 'qtcreator_light',
        'tomorrow', 'vs', 'xcode', 'arduino-light',
        'ascetic', 'color-brewer', 'lightfair'
    ]) !== -1;

    /**
     * 渲染代码
     */
    (() => {
        // 语言范围设置
        if ( $.__config.code.options.hljs.languages.length) {
            hljs.configure({
                languages: $.__config.code.options.hljs.languages
            });
        }

        // 渲染代码
        $.each(code, function (i, e) {
            let obj = $(code[i]);
            // 做一次换行兼容处理/padding处理
            obj.css('white-space', 'pre').html().replace(/\<br\>/g, '\n');
            obj.css({'padding': 0})
            // 清除代码原有样式
            obj.text(obj.text());
            // 替换白色背景的主题
            bgFlg && obj.css('background', '#f5f5fa');
            // 开始渲染代码
            hljs.highlightElement(e);
            // 设置复制按钮颜色
            $('.clipboard[boxid='+ obj.attr('boxid') +']').addClass('hljs-comment');
        });
    })();

    /**
     * 显示自动识别语言
     */
    let setCodeHljsLen = () => {
        let codeBox = $('code-box');
        $.each(codeBox, function (i, e) {
            let obj = $(codeBox[i]);
            let language = $('pre code')[i].result?.language
            if (language) obj.find('.code-hljs-len').text(language).css('visibility', 'visible');
        });
    }

    /**
     * 设置工具条背景色 & 添加语言标签
     */
    (() => {
        $.__timeIds.hljsCodeTId = window.setInterval(() => {
            let preHljs = $('pre code.hljs');
            if (preHljs.length > 0) {
                $('code-box').css('background', $('pre code.hljs').css('background')).prepend('<hljs-len class="code-hljs-len"></hljs-len>');
                setCodeHljsLen();
                $.__tools.clearIntervalTimeId( $.__timeIds.hljsCodeTId);
            }
        }, 1000);
    })();

    /**
     * 设置行号
     */
    (() => { setCodeLine(); })();
}