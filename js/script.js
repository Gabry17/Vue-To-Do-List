//VUE
const app = new Vue(
    {
        el:'#root',
        data:{
            option:[
                {
                    text:'Fare colazione',
                    done:true
                },
                {
                    text:'Seguire lezione',
                    done:false
                },
                {
                    text:'Preparare il pranzo',
                    done:true
                },
                {
                    text:'Fare la spesa',
                    done:true
                }
            ]
        }
    }
)