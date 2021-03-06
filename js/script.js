var app = new Vue (
    {
        el: '#root',

        data:{
            //indice 
            currentUser:0,
            userText: '',
            userFilter:'',
            activeMessage:false,
            
            
            //array di contatti
             contacts: [
                {   
                
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    userImg: 'img/avatar_1.jpg', 
                    
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    userImg: 'img/avatar_2.jpg', 
                    
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    userImg: 'img/avatar_3.jpg', 
                    
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    userImg: 'img/avatar_6.jpg', 
                    
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        
                    ],
                },
            ]
        },

        methods:{

            chooseUser(index){
        
                this.currentUser = index;
                this.activeMessage = false;
            },

            addText(){
               
                let newObject = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.userText,
                    status: 'sent'
                }

                if(this.userText.length > 0){
                    this.contacts[this.currentUser].messages.push(newObject);
                    this.userText = '';
                }
                
                //creo un nuovo oggetto da pushare nell' array ma che va stampato dopo 2 secondi
                setTimeout(()=>{
                    let newAnswerObj = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received'
                    }

                    this.contacts[this.currentUser].messages.push(newAnswerObj);

                }, 2000);
            
            },

                //funzione per filtrare utenti dalla lista
                filterContacts(){    
                    //console.log(this.userFilter);

                    //trasformo userFilter in Lowercase
                    const userFilterLowercase = this.userFilter.toLowerCase();
                    //console.log(userFilterLowercase);


                    //itero contacts e trasformo i valori di name in lowercase
                    this.contacts.forEach ((contact) => {
                        //console.log(contact);
                        const contactNameLowercase = contact.name.toLowerCase();
                        //console.log(contactNameLowercase);

                        //verifico se valore di name include valore della input minuscolo(userFilterLowercase)
                        if(contactNameLowercase.includes(userFilterLowercase)){
                            contact.visible = true;
                        }else{
                            contact.visible = false;
                        }

                    });

                },
                
                toggleMenu(msgIndex){
                    //console.log(msgIndex);
                    if(this.activeMessage === msgIndex){
                        this.activeMessage = false;
                    }else{
                        this.activeMessage = msgIndex;
                    }
                },

                deleteMessage(msgIndex){
                    //console.log(msgIndex);
                    this.contacts[this.currentUser].messages.splice(msgIndex, 1);
                    this.activeMessage=false;
                    
                }
                

        }
    }
);