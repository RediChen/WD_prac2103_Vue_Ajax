var docLink = "https://datacenter.taichung.gov.tw/Swagger/OpenData/2072c001-c06e-4276-bbf1-84f3b113c38c?limit=100" ;
const doc = {
    data() {
        return {
            docs : ""
        }
    },
    mounted() {
        //以下為在Vue框架中操作AJAX的流程
        var xhr = new XMLHttpRequest() ;
        xhr.open("GET", docLink) ;
        xhr.send() ;
        xhr.onload = () => {
            var json = xhr.responseText ;
            var obj = JSON.parse(json) ;
            this.docs = obj ;
            console.log(obj) ;//暫時查看方便
        }
    }
} ;
Vue.createApp(doc).mount("#paper") ;