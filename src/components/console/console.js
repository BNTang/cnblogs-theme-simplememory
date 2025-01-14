/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:21
 * ----------------------------------------------
 * @describe: 控制台输出处理
 */

export default function main() {

    // 输出默认版权信息
    let github = ["\n %c %c %c CnblogsTheme-GitHub %c  %c https://github.com/BNTang/Cnblogs-Theme-SimpleMemory %c \n\n", "background: #fadfa3; padding:5px 0;", "background: #fadfa3; padding:5px 0;", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;", "background: #FCEDC9; color:#030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"];
    window.console.log.apply(console, github);

    // 输出用户配置信息
    if ( $.__config.consoleList.length) {
        $.each( $.__config.consoleList, function (i) {
            let fl = $.__config.consoleList[i];
            console.log('\n' + ' %c '+(fl[0])+' %c '+(fl[1])+' ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; color:#000;padding:5px 0;');
        });
    }
}