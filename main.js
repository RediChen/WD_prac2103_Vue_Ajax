var docLink = "https://datacenter.taichung.gov.tw/Swagger/OpenData/2072c001-c06e-4276-bbf1-84f3b113c38c?limit=100" ;
const doc = {
    data() {
        return {}
    },
    mounted() {
        var xhr = new XMLHttpRequest() ;
        xhr.open("GET", docLink) ;
        xhr.send() ;
        xhr.onload = () => {
            var json = xhr.responseText ;
        }
    }
} ;
Vue.createApp(doc).mount("#paper") ;