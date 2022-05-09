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
                    done:false
                },
                {
                    text:'Fare la spesa',
                    done:true
                }
            ]
        },
        methods:{
            removeElement(index){
                this.option.splice(index,1);
            }
        }
    }
)