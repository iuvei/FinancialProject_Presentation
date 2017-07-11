/**
 * Created by pc on 2017/4/25.
 */

var tool=new Vue(
{
	el:'#app',
	data:{
		items:[

		]
	},
	beforeCreate(){
		this.$http.get('http://106.14.224.189/server/statistics/GetSalesStatistics.php',{
			params:{
				time:"year",
				year:2017
			}
		})
		.then(function(response){
			this.items=response.data;
            setTimeout(function () {
                $('#example1').DataTable();
            },0);
		}).catch(function(error){
			alert("出现了未知的错误！请重新进行输入")
		})
	}
});
