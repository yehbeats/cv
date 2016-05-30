/**
 * Created by lenovo on 2016/5/27.
 */
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        sectionsColor: ['#2C3E50', '#51BEC4', '#CC9966', '#66CCCC'],
        navigation: {
            'position': 'right',
            'tooltips': ['首页', '项目', '教育', '联系']
        },
        loopBottom: true
    });

});