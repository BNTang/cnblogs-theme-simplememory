/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: 文章底部信息按钮处理
 */
import '../../style/customBtn.css';

export default function main() {

    /**
     * 好文要顶
     */
    (() => {
        $.__timeIds.greenChannelDiggTId = window.setInterval(() => {
            let greenChannelDigg = $('#green_channel_digg');
            if (greenChannelDigg.length) {
                greenChannelDigg.after('<button class="custom-btn btn-11" onclick="' + greenChannelDigg.attr('onclick') + '">推荐该文' +
                    '<div class="dot"></div></button>');
                $.__tools.clearIntervalTimeId( $.__timeIds.greenChannelDiggTId);
            }
        }, 1000);
    })();

    /**
     * 关注我
     */
    (() => {
        $.__timeIds.greenChannelFollowTId = window.setInterval(() => {
            let greenChannelFollow = $('#green_channel_follow');
            if (greenChannelFollow.length) {
                greenChannelFollow.after('<button class="custom-btn btn-12" onclick="' + greenChannelFollow.attr('onclick') + '"><span>关注博主</span><span>关注博主</span></button>');
                $.__tools.clearIntervalTimeId( $.__timeIds.greenChannelFollowTId);
            }
        }, 1000);
    })();

    /**
     * 收藏该文
     */
    (() => {
        $.__timeIds.greenChannelFavoriteTId = window.setInterval(() => {
            let greenChannelFavorite = $('#green_channel_favorite');
            if (greenChannelFavorite.length) {
                greenChannelFavorite.after('<button class="custom-btn btn-7" onclick="' + greenChannelFavorite.attr('onclick') + '"><span>收藏本文</span></button>');
                $.__tools.clearIntervalTimeId( $.__timeIds.greenChannelFavoriteTId);
            }
        }, 1000);
    })();

    /**
     * 微博
     */
    (() => {
        $.__timeIds.greenChannelWeiboTId = window.setInterval(() => {
            let greenChannelWeibo = $('#green_channel_weibo');
            if (greenChannelWeibo.length) {
                greenChannelWeibo.after('<button class="custom-btn btn-15" onclick="' + greenChannelWeibo.attr('onclick') + '">分享微博</button>');
                $.__tools.clearIntervalTimeId( $.__timeIds.greenChannelWeiboTId);
            }
        }, 1000);
    })();

    /**
     * 微信
     */
    (() => {
        $.__timeIds.greenChannelWechatTId = window.setInterval(() => {
            let greenChannelWechat = $('#green_channel_wechat');
            if (greenChannelWechat.length) {
                greenChannelWechat.after('<button class="custom-btn btn-13" onclick="' + greenChannelWechat.attr('onclick') + '">分享微信</button>');
                $.__tools.clearIntervalTimeId( $.__timeIds.greenChannelWechatTId);
            }
        }, 1000);
    })();
}