new Vue({
    data: function () {
        this.$message({
            title: "复制成功🍬",
            message: "转载的话麻烦附上本文的链接哦",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})