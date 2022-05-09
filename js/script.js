//VUE
const app = new Vue(
    {
        el:'#root',
        data:{
            option:[
                {
                    title:'Fare colazione',
                    done:true
                },
                {
                    title:'Seguire lezione',
                    done:false
                },
                {
                    title:'Preparare il pranzo',
                    done:false
                },
                {
                    title:'Fare la spesa',
                    done:true
                }
            ],
            newtitle:''
        },
        methods:{
            removeElement(index){
                this.option.splice(index,1);
            },
            addElement(){
                this.option.push(this.newtitle);
            },
            addRemoveLine(index){
                this.option[index].done = !this.option[index].done;
            }
        }
    }
)